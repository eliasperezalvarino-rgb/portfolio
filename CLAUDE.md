# Portfolio de eliaaas

Web/portfolio de Elías (21 años, estudiante de diseño gráfico), construida entera con Claude Code. Este archivo es el contexto de todo el proyecto: qué es, cómo se distribuye, cómo se ve y cómo se construye. Se cerró en una ronda de preguntas el 22 de octubre de 2026.

## Cómo trabaja Elías

- En español, con un tono cercano y directo.
- Le gustan las rondas de preguntas en estilo "grill-me": preguntas por rondas, cada una con la recomendación de Claude, para responder "sí" o corregir.
- Hasta el 4 de diciembre de 2026 está también con la reforma de comunicación de su iglesia. No hay que quemarlo: Claude hace el código y Elías prepara imágenes y valida textos.
- Plazo: "cuanto antes". Se avanza lo que se pueda en cada sesión.

## 1. Para qué existe

- **Objetivo:** conseguir prácticas en un buen estudio.
- **Visitante ideal:** el director creativo de un estudio bien posicionado, con dos minutos libres.
- **Lo que tiene que pensar al cerrar la pestaña:** "este chico no solo hace cosas bonitas: piensa el porqué".
- **Posicionamiento:** diseñador gráfico muy interesado en la narrativa. Enseña trabajo editorial, gráfico y de dirección creativa/conceptual.

## 2. Identidad

- **Firma:** **eliaaas** (con tres aes). Es casi impronunciable a propósito, para que le llamen "Elías". Nunca "Elías Pérez".
- **Dominio:** **`eliaaas.com`**, decidido el 22/10/2026 porque coincide con la firma. Ese día estaba libre.
  - Se compra en Cloudflare Registrar, que lo vende a precio de coste (unos 10 €/año) y es donde está alojada la web. Lo compra Elías.
  - Hasta que esté conectado, la web vive gratis en `*.pages.dev`.
- **Idioma:** castellano por defecto e inglés con un selector "ES / EN" en el menú. La elección se recuerda y cada idioma tiene su propia URL (`/en/...`).

## 3. Mapa de la web

Menú fijo arriba, con cuatro entradas. La página activa (y el idioma elegido) va en *cursiva*, con el mismo peso que el resto. Antes iba en negrita; Elías lo cambió el 5/11/2026.

**Trabajo** · Sobre mí · Contacto · Sandbox

```
/                         Trabajo (inicio)
├── /editorial            Categoría
├── /grafico              Categoría
├── /direccion-creativa   Categoría
│   └── /proyectos/[slug] Página de proyecto (un proyecto puede estar en varias categorías)
├── /sobre-mi
├── /contacto
└── /sandbox              FASE 2: no sale en la primera versión
/en/...                   Las mismas páginas en inglés
```

### 3.1 Trabajo (inicio)

- Tres palabras en Helvetica, una por categoría: **Editorial**, **Gráfico** y **Dirección creativa**.
  - Pequeñas, de unos 18–26 px.
  - En escritorio van en una fila, con **Gráfico en el centro exacto de la página** y Editorial y Dirección creativa a los lados, separadas 3,5em. En móvil, apiladas y centradas.
  - Siempre en una sola línea: "Dirección creativa" no se parte.
  - **Sin ligaduras** en toda la web (`font-variant-ligatures: no-common-ligatures`). Además, el par "fi" lleva un poco más de tracking (`.par-fi`), porque en Times la f tocaba la i. Desde el cambio a Helvetica ya no hace falta, pero no molesta.
- **Al pasar el cursor** por una palabra, **se subraya** y aparecen imágenes de los proyectos de esa categoría, que cambian al azar como un flipbook (una cada 0,7 s).
  - **Cada imagen cabe en una caja del 55 % del alto por el 36 % del ancho** de la pantalla (en móvil, el ancho entero), centrada en vertical sobre las palabras. Así ni los pliegos ni el paquete del libro salen desproporcionados. Elías las pidió más pequeñas el 5/11/2026; antes ocupaban toda la altura.
  - **Todas, verticales u horizontales, se centran sobre la palabra activa** (5/11/2026). Si así se salieran de la pantalla, se desplazan lo justo para caber.
  - **En el showcase no sale ninguna imagen con fondo negro,** ni el envoltorio de Os días que foron (decisión de Elías, 5/11/2026).
- **Al hacer clic** se entra en la página de la categoría.
- **En móvil**, como no hay cursor, el primer toque activa el showcase y el segundo entra en la categoría.

### 3.2 Página de categoría

- **Doble columna** de borde a borde, como en [soihong.com](https://soihong.com). Sin scroll lateral (se descartó el 22/10/2026).
  - Cada columna cae a su ritmo: los proyectos impares van a la izquierda y los pares a la derecha.
  - **Escalonado:** la columna derecha empieza más abajo (22vw), así que ningún proyecto queda a la misma altura que su vecino. A Elías le gusta así, no hay que cambiarlo.
  - En móvil hay una sola columna, en el orden real.
- Cada tarjeta lleva la portada (vertical 4:5) y debajo el título y, en gris, "tipo, año".
- **Fondo neutro de las portadas** (6/11/2026): detrás de cada portada hay un gris cálido (`--lamina-clara`, `#d6d2c8`, más oscuro desde el 6/11 para que se distinga más) para que las de fondo transparente (Día, Os días que foron) se lean como un recuadro. También en Proyectos y en el cuadro del inicio de B.

### 3.3 Página de proyecto

1. **Ficha:** título · fecha · tipo de proyecto · su rol · contexto («Proyecto académico» si es de clase) · créditos si los hay. Desde el 5/11/2026 sí se dice si es de clase, y debajo de la intención va el **Encargo**: una explicación breve del ejercicio (campos `academico` y `encargo`).
2. **Intención:** una frase con lo que mueve a Elías y lo que quiere hacer sentir (su propósito como persona, no el técnico).
3. **Concepto y desarrollo:** texto breve.
4. **Imágenes: visor + índice** (elegido por Elías el 5/11/2026, mezcla de las opciones A y C; sustituye a la rejilla variada). **Primero el proyecto terminado y siempre al final los bocetos y el proceso** (Elías, 5/11/2026).
   - **Visor (A), lo que se ve al entrar:** en escritorio, el texto va en una columna fija a la izquierda y a la derecha una sola imagen cada vez, lo más grande que quepa.
   - **Fondo de cada imagen** (campo `fondo` en `index.md`): por defecto, las fotografías (JPG) salen completas, sin lámina, sobre el fondo de la página; los objetos recortados y las dobles páginas (WebP) van sobre lámina negra con un margen ajustado. `fondo: negro` o `fondo: ninguno` lo fuerzan (los bocetos de Día van en negro; la caja de té de Terra Viva, sin lámina). Se pasa como un libro: flechas ← →, clic en la mitad izquierda o derecha de la imagen, teclas de flecha o deslizando el dedo en móvil. Debajo, el pie de foto y el contador «03 / 12». Inspirado en la web de OK-RM.
   - **Índice (C), con el botón «Índice»:** hoja de contactos con todas las imágenes en miniatura sobre negro, numeradas. Al pulsar una se vuelve al visor en esa imagen. «Una a una» o Esc vuelven al visor. Inspirado en Hans Gremmen.
   - En móvil: textos arriba y debajo el visor en una lámina 4:5.
   - Está en `src/views/Proyecto.astro`. El campo `formato` (`completa`, `mitad`, `tercio`) de cada imagen ya no se usa, pero se conserva por si se vuelve a una rejilla.
   - Investigación (5/11/2026): OK-RM (una imagen por pantalla con contador), Hans Gremmen (cuadrícula de miniaturas), Jon Uriarte (cubierta, ficha y tira de miniaturas) y Nicolas Barreto (columna larga con pies). Kummer & Herrman, Ramon Pez y Spassky Fischer no cargaron.
5. **"Siguiente proyecto →"** al final, para que nadie se vaya sin ver otro trabajo.

### 3.4 Sobre mí

- Una frase de postura, que lo distinga de otros diseñadores.
- Una bio corta en primera persona.
- Una foto pequeña.
- Formación y herramientas.
- El CV en PDF para descargar.
- **Escuchando ahora** (6/11/2026): la canción que suena en su Spotify, leída de stats.fm (`stats.fm/eliasperezzz`, usuario en `sitio.statsfm` de `src/config.ts`). Si no suena nada, «Lo último que escuché». Usa una dirección de stats.fm que no es oficial; si deja de funcionar, el plan B es Last.fm. Está en `src/components/Escuchando.astro`.

### 3.5 Contacto

- Email `eliasperezalvarino@gmail.com`, Instagram `@eliaasperezz_` y teléfono (pendiente). Elías quiere el teléfono visible en la web. Todo está en `src/config.ts`.
- Sin formulario.
- El email se puede copiar con un clic.
- Los mismos datos aparecen también en el pie de todas las páginas.

### 3.6 Sandbox (fase 2)

- Es su laboratorio: piezas sin encargo, por curiosidad o porque le hacen gracia.
- Tendrá una galería de fotos y visuales en cuadrícula, que se abren a pantalla completa, y más adelante juegos o piezas interactivas.
- **Necesita una línea de explicación al entrar,** para que no confunda. El texto está por definir con Elías.
- Va el último en el menú. No entra en la primera versión.

## 4. Proyectos

Cuatro en la primera versión. Mejor cuatro fuertes que un quinto flojo para hacer número. La reforma de comunicación de la iglesia podrá entrar más adelante como caso de estudio, cuando esté avanzada.

| Proyecto | Editorial | Gráfico | Dirección creativa |
|---|:-:|:-:|:-:|
| **Día** | ● | | ● |
| **Os días que foron** | ● | | |
| **Terra Viva** | | ● | ● |
| **How do you feel about getting married?** | ● | ● | ● |

Así cada categoría tiene al menos dos proyectos: Editorial 3, Gráfico 2 y Dirección creativa 3.

**Videoclip (6/11/2026):** **Simbiosis** (Diego Flâneur, 2024), dirigido y realizado a tres con Xacobe Bruña y Román Pereira, los tres con los mismos roles: dirección creativa, dirección y cámara (va en «Rol»). Está en Dirección creativa (que pasa a 4), orden 5. El de Beach Avenue (No Name) se añadió y Elías lo quitó el mismo día. **Sin fotos, solo el vídeo** (los fotogramas no le gustaron a Elías). La portada y el showcase son la miniatura de YouTube recortada en 4:5 como las demás (`simbiosis_portada_45_v2.jpg`), y la vista previa del vídeo es la miniatura entera. Textos «Por escribir» y años sacados de la fecha de publicación, por confirmar.
- **Campo `video`** en `index.md` (`youtube`, `fotograma`, `pie`): el vídeo es la primera diapositiva del visor, sin lámina negra. Si no hay más imágenes, se ocultan el contador, las flechas y el índice. YouTube (`youtube-nocookie.com`) no se carga hasta pulsar «▶ Ver vídeo», y se pausa al pasar de diapositiva o abrir el índice.

- **Día.** Fotofanzine en el que Elías cuenta cómo es un día en su vida.
- **Os días que foron.** Maquetación de un fotolibro. Es un proyecto fotográfico sobre una experiencia de vida colectiva en un pequeño pueblo de Ourense: el autor convivió con un grupo de amigos en un edificio cedido por el ayuntamiento, que ellos rehabilitaron y convirtieron en un espacio de encuentro y creación artística.
  - **Créditos:** "Fotografía: Jesús García · Diseño y maquetación: eliaaas". Hay permiso para publicar las imágenes.
  - Elías tiene la memoria y la explicación del proyecto.
- **Terra Viva.** Línea de packaging integral para una marca ficticia de productos ecológicos. Empieza por los vinos, con la D.O. Ribeira Sacra como territorio de referencia.
  - **El reto:** que un vino de calidad excepcional llegue a un público que el sector ha ignorado, sin traicionar el origen ni caer en artificios.
  - Hay decisiones en todos los niveles: materiales, estructura, gráfica, comunicación y experiencia de usuario.
- **How do you feel about getting married?** Publicación en risografía, serigrafía de camisetas y sublimación.
  - Cuenta la historia del álbum de Dijon: cómo conoció a su mujer, las tensiones y los sentimientos, los momentos especiales y la intimidad de todo el proceso.

**Material:** Elías tiene las imágenes de los cuatro: fotos del objeto, mockups y bocetos.

**Fotografías:** el sistema de archivo, los nombres, cuántas fotos por proyecto, cómo fotografiar y cómo exportar está en `organizacion-fotografias.md`. Los originales viven en `~/Fotos-portfolio/`, fuera del código.

## 5. Criterios de escritura de los proyectos

**La versión completa, con ejemplos y una lista de revisión, está en `criterios-de-escritura.md`.** Aquí va el resumen. Los límites de palabras los valida la web al compilar (`src/content.config.ts`).

Ninguno de los textos actuales está bien escrito. Se reescriben todos con estas reglas, para que suenen igual. Elías avisó de que los textos largos sobran: **la imagen cuenta el desarrollo y el texto solo lo orienta.**

- **Ficha:** título · año · tipo · su papel · créditos.
- **Intención:** una frase de 20 palabras como máximo. Es lo más importante de la página: qué le mueve a hacer lo que hace y qué quiere hacer sentir. No es el propósito técnico ni el de negocio (Elías, 5/11/2026).
- **Concepto:** unas 60 palabras como máximo. Qué idea lo ordena todo.
- **Desarrollo:** unas 60 palabras como máximo, más pies de foto cortos en los bocetos ("Descartado: …, porque …").
- **Voz:** primera persona y frases cortas. Cada decisión, con su motivo.
- **Palabras prohibidas:** "bonito", "innovador", "único", "moderno", "impactante".
- Siempre en ES y EN. Primero se escribe en castellano y luego se traduce.

## 6. Dirección visual

**La web es un marco silencioso y los trabajos ponen el color.** El único gesto fuerte son las tres palabras del inicio.

- **Tipografía:** Helvetica de sistema en toda la web (`"Helvetica Neue", Helvetica, Arial, sans-serif`), desde el 5 de noviembre de 2026; antes era Times. Cuesta 0 € y no carga nada. Se cambia en `--fuente`, en `src/styles/global.css`. Las palabras del inicio van enormes y el resto pequeño, a tamaño de pie de foto.
- **Color:** solo blanco roto y negro. Ningún otro color de interfaz.
- **Estilo:** texto pequeño, mucho aire, sin sombras, sin bordes redondeados y sin animaciones decorativas. El único movimiento es el showcase del inicio, y se respeta `prefers-reduced-motion`.
- **Pies de foto** como ficha: `(book design, art direction) Título, 2026`.
- **Referencias de Elías:**
  - [soihong.com](https://soihong.com): menú en columnas, texto mínimo.
  - [Office D.SHARP / appendix](https://www.officedavesharp.com/appendix): serifa enorme, archivo en tabla.
  - [jarodtaber.com/archive](https://www.jarodtaber.com/archive): rejilla que revela las imágenes.
  - [lafolie8.com](https://lafolie8.com): en obras a 22/10.
  - [nicolasbarreto.com](https://www.nicolasbarreto.com): Times, imagen y pie tipo ficha.
  - [jonuriarte.es](https://jonuriarte.es/index.php?/curatorial/arrakala/): índice lateral de texto.
  - [mivides.com](https://mivides.com): no cargó al revisarla.
  - [paugeis.com/Info](https://paugeis.com/Info): página de info en Times, en listas.
- **Esta web no usa** la paleta del proyecto de la iglesia (ink, paper, amber…). Son proyectos separados.

## 7. Técnica (lo más barato posible)

- **[Astro](https://astro.build)** como generador estático, con el i18n nativo para ES/EN.
- **Contenido:** cada proyecto es un archivo Markdown en `src/content/proyectos/` con su carpeta de imágenes. Para añadir un proyecto se copia una plantilla y no se toca código.
  - El *frontmatter* lleva: `titulo`, `slug`, `año`, `tipo`, `papel`, `creditos`, `categorias` (una o varias de `editorial`, `grafico`, `direccion-creativa`), `intencion`, `portada` e `imagenesShowcase`.
  - El cuerpo lleva el concepto, el desarrollo y la rejilla de imágenes.
- **Imágenes:** se optimizan con `astro:assets` (WebP o AVIF, varios tamaños y carga diferida). Es lo que más pesa en la web.
- **Código:** en GitHub, gratis.
- **Alojamiento:** Cloudflare Pages, gratis y sin límite de tráfico. Se publica solo al hacer push.
- **Dominio:** `eliaaas.com`, unos 10 €/año en Cloudflare Registrar. Se conecta a Cloudflare Pages.
- **Accesibilidad mínima:** textos alternativos en las imágenes, navegación con teclado y contraste correcto.

## 8. Versiones

**Versión 1 (ahora):**
- Inicio con showcase
- Las tres categorías
- Los cuatro proyectos
- Sobre mí
- Contacto
- ES/EN
- Móvil

**Fase 2:**
- Sandbox: galería, y después juegos e interacción
- La iglesia como quinto proyecto

## 9. El código

```
src/config.ts            Datos de contacto, categorías, rutas y textos de la interfaz (ES/EN)
src/textos.ts            Textos de "Sobre mí"
src/content.config.ts    Estructura de un proyecto y límites de palabras
src/content/proyectos/   Una carpeta por proyecto: index.md + imágenes
src/views/               Las páginas de verdad (Inicio, Categoria, Proyecto, SobreMi, Contacto)
src/pages/  y  src/pages/en/   Rutas finas que llaman a las vistas con idioma="es" o "en"
src/layouts/Base.astro   Cabecera, menú, selector de idioma y pie
```

- **Arrancar en local:** `npm run dev` y abrir http://localhost:4321.
- **Compilar:** `npm run build`. Si un texto se pasa de palabras, falla y dice cuál.
- **Añadir un proyecto:** copiar una carpeta de `src/content/proyectos/`, cambiar las imágenes y rellenar `index.md`. El orden en la web lo marca `orden`.
- **Imágenes del proyecto:** el orden de `imagenes` en `index.md` es el orden del visor. El `formato` ya no se usa (ver 3.3). Las de `showcase` son las que salen al azar en el inicio.
- **Inglés:** las rutas cambian (`/proyectos/` → `/en/projects/`, `/sobre-mi/` → `/en/about/`…). Si el visitante elige EN, se recuerda y la portada le lleva a `/en/`.

## 10. Estado (22 de octubre de 2026)

**Primera versión montada:** compila, se ha revisado en escritorio y en móvil, y funciona en ES y EN.

- **Fotos reales desde el 22/10/2026:** 45 imágenes de los cuatro proyectos, sacadas de `~/Downloads/PORTFOLIO`.
  - Los originales están en `~/Fotos-portfolio`.
  - Lo que se extrajo de los PDF y las dudas de cada proyecto están en su `notas.md`.
  - La revisión visual está en `~/Fotos-portfolio/hoja-de-contactos.html`, con las dudas en fondo negro.
  - Para exportar: JPG sRGB al 82 %. La rotación EXIF de las fotos del móvil se aplica a los píxeles.
  - **Si Elías pasa PNG con fondo transparente, la transparencia se conserva** (5/11/2026): nunca se rellena de blanco. Se recortan los márgenes transparentes al contenido y se guardan como WebP con alfa (calidad 85, con `sharp`). Las portadas mantienen el lienzo 4:5, con el objeto centrado sobre fondo transparente. Así están las imágenes nuevas de Día, HDYFAGM y Os días que foron.
    - **Al recortar, medir la caja del contenido con `sharp` sobre el canal alfa** (filas de arriba abajo). Un primer recorte hecho con CoreGraphics invirtió el eje vertical y cortó la parte de arriba de las imágenes con más margen arriba que abajo (el envoltorio, la doble página naranja de HDYFAGM). Se rehicieron el 5/11/2026.
  - **Al sustituir una imagen, cambiarle el nombre** (`_v2`, `_v3`…). El servidor de desarrollo sirve las imágenes con caché de un año y la dirección solo depende del nombre del archivo, así que el navegador de Elías seguiría enseñando la antigua aunque recargue. En la web publicada no pasa.
- **Las ilustraciones y los esquemas hechos para una presentación no van en la web,** como los de márgenes y sangre de Os días que foron. Lo que expresan se cuenta en el texto. De los PDF solo se extraen piezas reales, como las dobles páginas.
- **Las imperfecciones del rodaje pueden quedarse:** a Elías le gusta IMG_7629 de Terra Viva con la cinta adhesiva a la vista. No hay que "limpiar" las fotos sin preguntar.
- **Regla de Elías:** si una foto no encaja en el formato, se pone sobre **fondo negro**. Desde el 5/11/2026 ese negro lo pone la web (la lámina del proyecto): las imágenes ya no llevan el negro dentro. A las que lo traían de la presentación se les recortó, y las tres dobles páginas de Os días que foron que lo tenían (niebla, ruinas, ventana) se sustituyeron por las páginas 011, 016 y 026 exportadas a 300 ppp del PDF final (`~/Downloads/PORTFOLIO/OS DIAS QUE FORON/DOBLES PAGINAS 300ppp/`).
- Las fotos de Día y de los riso son de 1920 px, de poca resolución. Si hay archivos más grandes, hay que sustituirlos.
- Las intenciones de Terra Viva, HDYFAGM y Os días que foron son **borradores de Claude**. El resto pone "Por escribir".
- **Día tiene sus textos cerrados** (6/11/2026): intención, concepto y desarrollo en ES y EN, escritos con Elías. 2025, 3.º curso. El amarillo del papel simula la luz del día (va en el pie del sol). El retrato de la portada es Elías, pero el concepto dice «la única foto en la que aparezco» y él quiere dejarlo así. Solo queda una foto del proceso (se quitó `dia_boceto_02`).
- Las fechas son 2025 provisional.
- Las herramientas y la formación de Sobre mí están por confirmar.
- **Orden provisional de los proyectos:** HDYFAGM, Terra Viva, Os días que foron, Día.
- Aún no hay repositorio en GitHub ni la web está publicada en Cloudflare Pages.

## 11. Pendiente de Elías

- [ ] Comprar `eliaaas.com` en Cloudflare Registrar.
- [ ] Decir el teléfono para Contacto.
- [ ] Pasar las imágenes de los cuatro proyectos y los textos o memorias que haya.
- [ ] Reescribir con Claude los cuatro textos con `criterios-de-escritura.md`.
- [ ] Confirmar las fechas reales, el papel en cada proyecto y el orden.
- [ ] Escribir la frase de postura y la bio de Sobre mí, y pasar la foto, la formación y las herramientas.
- [ ] Preparar el CV en PDF.
- [ ] Crear cuenta en GitHub y Cloudflare para publicar.

## 12. Portfolio B (pruebas, 6/11/2026)

**B gana (Elías, 6/11/2026): a partir de ahora se trabaja sobre B.** Los cambios nuevos van en `src/b/`. Falta pasarla a la web principal (ver el final de esta sección).

Copia completa de la web para probar cambios sin tocar la buena. Se ve en `http://localhost:4321/b/` (y `/b/en/`).

- Vistas, layout, estilos y componentes de B: `src/b/` (`views/`, `layouts/`, `styles/global.css`, `components/`).
- Rutas de B: `src/b/config.ts` (las mismas que `src/config.ts`, pero bajo `/b`).
- Páginas: `src/pages/b/`.
- Comparte con la buena los proyectos (`src/content/`), `src/proyectos.ts`, `src/textos.ts` y las imágenes.
- **Cambios de B (6/11/2026):**
  - Sin las tres palabras: la landing (`src/b/views/Inicio.astro`) no tiene texto, ni menú ni pie (`minimo` en `Base.astro`). Solo la firma arriba a la izquierda y, abajo a la derecha, un cuadro 4:5 (24 % del ancho) donde las portadas se suceden cada 1,4 s, sin transición. Al pasar el cursor se para; al clicar, a Proyectos.
  - Nueva página **Proyectos** (`src/b/views/Proyectos.astro`, `/b/proyectos/` y `/b/en/projects/`): hoja de contactos con todos los proyectos numerados «(1)», el nombre aparece al pasar el cursor, y filtros por sección (lo que no es de la sección se queda en gris y apagado; la sección va en `?seccion=`). Sustituye a «Trabajo» en el menú. Las páginas de categoría siguen existiendo, pero no se enlazan.
  - **Vistas en Proyectos** (6/11/2026): dos iconos pequeños en trazo (sin texto) a la derecha de los filtros, el activo en tinta y el otro en gris. Por defecto, cuadrícula, algo más ajustada que antes: 10 px entre imágenes, 22 px entre filas y 12 px de margen lateral (`--borde`). Elías la pidió más ajustada y luego «no tanto». Escalonado es el de las categorías de A: dos columnas de borde a borde, pares a la derecha 22vw más abajo, y debajo el título y «tipo, año». La elección se recuerda en el navegador (`localStorage`, `vista-proyectos`). Los filtros funcionan en las dos vistas.
  - **Subrayado de lo activo** (6/11/2026): el filtro elegido en Proyectos y la página activa del menú se quedan subrayados (solo la palabra, no el número). El idioma sigue en cursiva.
  - **Sin página de Contacto** (6/11/2026): el menú queda en Proyectos · Sobre mí, y los datos de contacto (email con «Copiar», Instagram, teléfono) van al final de Sobre mí (`#contacto`). El pie sigue llevándolos.
  - En el índice de cada proyecto, las miniaturas van numeradas «(1)», como en Proyectos.
  - Página de proyecto con texto más pequeño (12,5 px) y jerarquía sutil: título a 19 px, intención a 15 px, etiquetas en versalitas grises.
  - Microanimaciones en `src/b/styles/global.css`: fundido entre páginas (View Transitions), subrayado que se funde, entradas escalonadas, flechas que se asoman, en el visor las imágenes pasan con corte seco (el fundido se quitó el 6/11/2026 porque se veía el blanco del fondo). Todo se apaga con `prefers-reduced-motion`.
- Si B gana: copiar `src/b/views|layouts|styles|components` sobre los de `src/` y borrar `src/b/` y `src/pages/b/`. Si no, borrar esas dos carpetas. Antes de publicar, quitar B para que no salga en la web.
