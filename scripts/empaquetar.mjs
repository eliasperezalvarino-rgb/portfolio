// Empaqueta la web compilada (dist/) en un ZIP que se abre con doble clic, sin servidor.
// Uso: npm run empaquetar  →  entrega/eliaaas-portfolio.zip
//
// La web publicada usa rutas absolutas (/proyectos/dia/). Abiertas como archivo, esas rutas
// apuntan a la raíz del disco, así que en la copia se pasan a relativas
// (../proyectos/dia/index.html).
import { cp, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const raiz = path.resolve(import.meta.dirname, '..');
const dist = path.join(raiz, 'dist');
const entrega = path.join(raiz, 'entrega');
const nombre = 'eliaaas-portfolio';
const carpeta = path.join(entrega, nombre);
const web = path.join(carpeta, 'web');

async function archivos(dir) {
  const salida = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) salida.push(...(await archivos(p)));
    else salida.push(p);
  }
  return salida;
}

// "/proyectos/dia/?x#y" → "../../proyectos/dia/index.html?x#y" según la profundidad.
function relativa(url, prefijo) {
  if (!url.startsWith('/') || url.startsWith('//')) return url;
  const m = url.match(/^([^?#]*)(.*)$/);
  let ruta = m[1].slice(1);
  if (ruta === '' || ruta.endsWith('/')) ruta += 'index.html';
  return prefijo + ruta + m[2];
}

await rm(entrega, { recursive: true, force: true });
await mkdir(carpeta, { recursive: true });
await cp(dist, web, { recursive: true });

let paginas = 0;
for (const archivo of await archivos(web)) {
  const rel = path.relative(web, path.dirname(archivo));
  const profundidad = rel === '' ? 0 : rel.split(path.sep).length;
  const prefijo = profundidad === 0 ? './' : '../'.repeat(profundidad);

  if (archivo.endsWith('.html')) {
    let html = await readFile(archivo, 'utf8');
    html = html.replace(/\b(href|src|poster)="(\/[^"]*)"/g, (_, a, u) => `${a}="${relativa(u, prefijo)}"`);
    html = html.replace(/\bsrcset="([^"]*)"/g, (_, s) =>
      `srcset="${s.split(',').map((p) => p.trim().replace(/^(\S+)/, (u) => relativa(u, prefijo))).join(', ')}"`,
    );
    html = html.replace(/url\((['"]?)(\/[^)'"]*)\1\)/g, (_, q, u) => `url(${q}${relativa(u, prefijo)}${q})`);
    // Rutas que quedan dentro de scripts o datos (JSON en atributos).
    html = html.replace(/(["'(\s,]|&quot;)\/_astro\//g, `$1${prefijo}_astro/`);
    html = html.replace(/location\.replace\('\/en\/'\)/g, `location.replace('${prefijo}en/index.html')`);
    await writeFile(archivo, html);
    paginas++;
  } else if (archivo.endsWith('.css')) {
    let css = await readFile(archivo, 'utf8');
    css = css.replace(/url\((['"]?)\/_astro\//g, 'url($1');
    await writeFile(archivo, css);
  }
}

// Acceso directo en la raíz del ZIP: lleva a la web.
await writeFile(
  path.join(carpeta, 'ABRIR PORTFOLIO.html'),
  `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>eliaaas — portfolio</title>
<meta http-equiv="refresh" content="0; url=web/index.html">
</head>
<body style="font-family: Helvetica, Arial, sans-serif; padding: 2rem">
<p><a href="web/index.html">Abrir el portfolio</a></p>
</body>
</html>
`,
);

await cp(path.join(raiz, 'scripts', 'LEEME.txt'), path.join(carpeta, 'LEEME.txt'));

// ZIP con ditto (macOS), que respeta tildes y no mete archivos ocultos de Finder.
const zip = path.join(entrega, `${nombre}.zip`);
execFileSync('ditto', ['-c', '-k', '--norsrc', '--keepParent', carpeta, zip]);

console.log(`${paginas} páginas preparadas → ${path.relative(raiz, zip)}`);
