// PORTFOLIO B (pruebas): copia de src/config.ts con las rutas bajo /b.
// Datos del sitio, rutas y textos fijos de la interfaz en los dos idiomas.

export type Idioma = 'es' | 'en';
export type Bilingue = Record<Idioma, string>;

export const sitio = {
  firma: 'eliaaas',
  email: 'eliasperezalvarino@gmail.com',
  instagram: 'eliaasperezz_',
  // Pendiente: el teléfono. Mientras esté vacío no se muestra.
  telefono: '',
  // Pendiente: ruta al CV en /public (por ejemplo '/cv-eliaaas.pdf'). Vacío = no se muestra.
  cv: '',
  // Usuario de stats.fm para «Escuchando ahora» en Sobre mí (stats.fm/eliasperezzz). Vacío = no se muestra.
  statsfm: 'eliasperezzz',
};

export const categorias = [
  { id: 'editorial', nombre: { es: 'Editorial', en: 'Editorial' }, slug: { es: 'editorial', en: 'editorial' } },
  { id: 'grafico', nombre: { es: 'Gráfico', en: 'Graphic' }, slug: { es: 'grafico', en: 'graphic' } },
  {
    id: 'direccion-creativa',
    nombre: { es: 'Dirección creativa', en: 'Creative direction' },
    slug: { es: 'direccion-creativa', en: 'creative-direction' },
  },
] as const;

export type CategoriaId = (typeof categorias)[number]['id'];
export const idsCategorias = categorias.map((c) => c.id) as [CategoriaId, ...CategoriaId[]];

export const rutas = {
  inicio: { es: '/b/', en: '/b/en/' },
  proyectos: { es: '/b/proyectos/', en: '/b/en/projects/' },
  sobreMi: { es: '/b/sobre-mi/', en: '/b/en/about/' },
};

export function rutaCategoria(id: CategoriaId, idioma: Idioma) {
  const slug = categorias.find((c) => c.id === id)!.slug[idioma];
  return idioma === 'es' ? `/b/${slug}/` : `/b/en/${slug}/`;
}

export function rutaProyecto(slug: string, idioma: Idioma) {
  return idioma === 'es' ? `/b/proyectos/${slug}/` : `/b/en/projects/${slug}/`;
}

export const t = {
  trabajo: { es: 'Trabajo', en: 'Work' },
  proyectosMenu: { es: 'Proyectos', en: 'Projects' },
  todos: { es: 'Todos', en: 'All' },
  filtrar: { es: 'Filtrar por sección', en: 'Filter by section' },
  // Vistas de Proyectos (6/11/2026): cuadrícula por defecto y escalonado como en la web A.
  vista: { es: 'Vista', en: 'View' },
  cuadricula: { es: 'Cuadrícula', en: 'Grid' },
  escalonado: { es: 'Escalonado', en: 'Staggered' },
  verProyectos: { es: 'Ver proyectos', en: 'See projects' },
  sobreMi: { es: 'Sobre mí', en: 'About' },
  contacto: { es: 'Contacto', en: 'Contact' },
  menu: { es: 'Menú', en: 'Menu' },
  cerrar: { es: 'Cerrar', en: 'Close' },
  fecha: { es: 'Fecha', en: 'Date' },
  tipo: { es: 'Tipo', en: 'Type' },
  // «Rol» y no «Papel», que se confundía con el papel de imprimir (Elías, 5/11/2026).
  papel: { es: 'Rol', en: 'Role' },
  creditos: { es: 'Créditos', en: 'Credits' },
  contexto: { es: 'Contexto', en: 'Context' },
  academico: { es: 'Proyecto académico', en: 'Academic project' },
  encargo: { es: 'Encargo', en: 'Brief' },
  concepto: { es: 'Concepto', en: 'Concept' },
  desarrollo: { es: 'Desarrollo', en: 'Development' },
  siguiente: { es: 'Siguiente proyecto', en: 'Next project' },
  // Visor de imágenes del proyecto
  indice: { es: 'Índice', en: 'Index' },
  unaAUna: { es: 'Una a una', en: 'One by one' },
  imagenAnterior: { es: 'Imagen anterior', en: 'Previous image' },
  imagenSiguiente: { es: 'Imagen siguiente', en: 'Next image' },
  verVideo: { es: 'Ver vídeo', en: 'Play video' },
  proyectos: { es: 'proyectos', en: 'projects' },
  copiar: { es: 'Copiar', en: 'Copy' },
  copiado: { es: 'Copiado', en: 'Copied' },
  telefono: { es: 'Teléfono', en: 'Phone' },
  descargarCv: { es: 'Descargar CV (PDF)', en: 'Download CV (PDF)' },
  descripcion: {
    es: 'eliaaas, diseñador gráfico interesado en la narrativa. Editorial, gráfico y dirección creativa.',
    en: 'eliaaas, graphic designer driven by narrative. Editorial, graphic design and creative direction.',
  },
} satisfies Record<string, Bilingue>;
