# Organización de fotografías · eliaaas

Un sistema para que cualquier foto, de cualquier proyecto, tenga un sitio fijo desde que la haces hasta que sale en la web, y para que no tengas que pensar dónde va cada cosa.

> **Regla de oro:** los originales nunca se tocan ni entran en la web. A la web solo llega una copia exportada, con su nombre y su tamaño.

---

## 1. Dos lugares, dos funciones

| | **Archivo** | **Web** |
|---|---|---|
| **Dónde** | `~/Fotos-portfolio/` (fuera del código) | `~/Portfolio/src/content/proyectos/` |
| **Qué guarda** | Todo: originales, editadas, descartes | Solo lo que se publica |
| **Formato** | RAW, HEIC, TIFF, PSD, escaneos… | JPG exportado |
| **Copia de seguridad** | Disco externo + nube | GitHub (cuando lo subamos) |

El archivo puede pesar gigas. La web tiene que ser ligera y no puede llevar originales, porque GitHub no está pensado para eso y la web cargaría lenta.

---

## 2. Estructura del archivo

```
Fotos-portfolio/
├── 00_entrada/                 Todo lo nuevo cae aquí, sin ordenar
├── 01_proyectos/
│   ├── how-do-you-feel-about-getting-married/
│   │   ├── 1_originales/       Tal cual salen de la cámara, el móvil o el escáner
│   │   ├── 2_editadas/         Versiones trabajadas (TIFF, PSD, JPG en máxima calidad)
│   │   ├── 3_web/              Exportadas para la web, con el nombre del sistema
│   │   └── notas.md            Qué se ve en cada foto y los pies que se te ocurran
│   ├── terra-viva/
│   ├── os-dias-que-foron/
│   └── dia/
├── 02_sandbox/
│   └── 2026/                   Fotos sueltas por año
├── 03_sobre-mi/                Retratos
└── 99_descartes/               Lo que no vale pero no quieres borrar todavía
```

- **Los nombres de carpeta de proyecto son los mismos que en la web** (el `slug`). Así siempre sabes qué carpeta va con qué página.
- **Los números delante** (00, 01, 1_, 2_…) mantienen el orden en Finder, que si no ordena alfabéticamente.
- **`00_entrada` se vacía** cada vez que te sientas a ordenar. No es un sitio para vivir.

---

## 3. Cómo se llaman los archivos

Solo en `3_web/`. Los originales pueden conservar su nombre de cámara.

```
[proyecto]_[tipo]_[número].jpg
```

| Tipo | Qué es | Ejemplo |
|---|---|---|
| `portada` | La imagen que representa el proyecto en la categoría | `terra-viva_portada.jpg` |
| `final` | La pieza terminada, entera | `terra-viva_final_01.jpg` |
| `detalle` | Primer plano: textura, tipografía, acabado, papel | `terra-viva_detalle_01.jpg` |
| `proceso` | Pruebas, impresión, taller, maquetas | `terra-viva_proceso_01.jpg` |
| `boceto` | Dibujos y escaneos de libreta | `terra-viva_boceto_01.jpg` |
| `contexto` | La pieza en uso: en la mano, en una estantería, puesta | `terra-viva_contexto_01.jpg` |
| `comunicacion` | Carteles, campañas y piezas de comunicación del proyecto | `terra-viva_comunicacion_01.jpg` |

**Si una foto no encaja en el formato,** por ejemplo una portada que no se puede recortar a 4:5, se pone sobre **fondo negro**.

**Imágenes sacadas de PDF o presentaciones** (diapositivas, dobles páginas) van a `2_editadas/` con el nombre `presentacion_p26.jpg`, y de ahí se exportan a `3_web/`. Los PDF no se publican tal cual: se extrae lo valioso y se apunta en `notas.md`.

**Reglas:**
- Todo en minúsculas, sin tildes ni espacios, con guiones. Escribe `dia`, no `Día`.
- El número siempre con dos cifras (`01`, `02`… `12`), para que se ordene bien.
- El número indica el orden en la página, no el orden en que las hiciste.

**Sandbox:** `2026-10_descripcion-corta.jpg` (año-mes y qué es).

---

## 4. Cuántas fotos por proyecto

La web enseña poco y bien. Por proyecto:

| Tipo | Cuántas | En la web |
|---|---|---|
| Portada | 1 | Categoría + showcase del inicio |
| Bocetos | 1–3 | Formato `tercio` |
| Proceso | 1–2 | `tercio` o `mitad` |
| Final | 1–2 | `completa` |
| Detalle / contexto | 2–4 | `mitad` |
| **Total** | **6–12** | |

- **Para el showcase del inicio** elige entre 2 y 4 imágenes por proyecto: las que se entiendan en medio segundo. Normalmente la portada, un final y un detalle.
- **Si dudas entre dos, quédate con una.** La otra va a `99_descartes`.

---

## 5. Cómo fotografiar las piezas físicas

Tu web es un marco neutro, así que las fotos tienen que parecer de la misma familia aunque los proyectos sean muy distintos.

- **Fondo:** siempre el mismo, una cartulina o pared blanca o gris claro, lisa, para todos los proyectos.
- **Luz:** natural, de ventana y de lado, sin sol directo y sin flash. Mejor a media mañana o en un día nublado.
- **Encuadres que conviene tener de cada pieza:**
  1. Frontal y plano: la portada o la cara principal.
  2. Tres cuartos: el objeto con volumen (lomo, grosor, caja).
  3. Dobles páginas abiertas o el interior, en libros, fanzines y packaging.
  4. Detalle de textura: papel, tinta riso, serigrafía.
  5. En contexto: en la mano, puesta o en uso.
- **Proporción:** la **portada siempre en vertical 4:5**, para que la doble columna de las categorías quede ordenada. El resto, libre.
- **Con el móvil vale,** siempre que limpies el objetivo, no hagas zoom digital y bloquees la exposición.

---

## 6. Exportar para la web

Desde Lightroom, Photoshop o Vista Previa:

| Ajuste | Valor |
|---|---|
| Formato | JPG |
| Perfil de color | sRGB |
| Lado largo | 2400 px (portada y finales); 1600 px (bocetos y detalles) |
| Calidad | 80–85 % |
| Peso orientativo | Menos de 1 MB por imagen |

La web genera sola las versiones más pequeñas y en formato WebP. Tú solo exportas una vez, grande y bien.

---

## 7. El flujo, paso a paso

1. **Volcar.** Todo lo nuevo va a `00_entrada/`.
2. **Repartir.** Mueve cada foto a `1_originales/` de su proyecto, o a `02_sandbox/`.
3. **Seleccionar.** Marca las fotos en Finder con etiquetas de color:
   - 🟢 **Verde:** va a la web.
   - 🟡 **Amarilla:** quizá.
   - 🔴 **Roja:** descarte, va a `99_descartes/`.
4. **Editar.** Las verdes se editan y se guardan en `2_editadas/`.
5. **Exportar.** Se exportan a `3_web/` con el nombre del sistema y los ajustes de la sección 6.
6. **Anotar.** En `notas.md`, una línea por foto: qué se ve, para el texto alternativo, y un pie si lo tiene.
7. **Publicar.** Copia el contenido de `3_web/` a `~/Portfolio/src/content/proyectos/[proyecto]/` y actualiza `index.md`. O pásame la carpeta y lo hago yo.

**Plantilla de `notas.md`:**

```
terra-viva_portada.jpg      — Botella y caja sobre fondo gris. | Pie: —
terra-viva_boceto_01.jpg    — Bocetos de la etiqueta en libreta. | Pie: Primeras pruebas de etiqueta.
terra-viva_detalle_01.jpg   — Relieve seco en el papel de la etiqueta. | Pie: Relieve seco sin tinta.
```

---

## 8. Copias de seguridad

- `Fotos-portfolio/` entero en un **disco externo** y en una **nube** (iCloud, Google Drive…).
- Haz la copia cada vez que acabes de ordenar un proyecto.
- No borres nada de `1_originales/`, nunca.

---

## 9. Para crear la estructura de carpetas

Pega esto en la Terminal y se crea todo de una vez:

```bash
cd ~ && mkdir -p Fotos-portfolio/{00_entrada,02_sandbox/2026,03_sobre-mi,99_descartes} && for p in how-do-you-feel-about-getting-married terra-viva os-dias-que-foron dia; do mkdir -p "Fotos-portfolio/01_proyectos/$p"/{1_originales,2_editadas,3_web} && touch "Fotos-portfolio/01_proyectos/$p/notas.md"; done
```
