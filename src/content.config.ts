import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { idsCategorias } from './config';

// Los límites salen de criterios-de-escritura.md. Si un texto se pasa, la web no compila.
const palabras = (max: number) =>
  z.string().refine((s) => s.trim().split(/\s+/).length <= max, {
    message: `Máximo ${max} palabras (ver criterios-de-escritura.md)`,
  });

const bilingue = (max?: number) => {
  const texto = max ? palabras(max) : z.string();
  return z.object({ es: texto, en: texto });
};

const proyectos = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      titulo: z.string(),
      orden: z.number(),
      fecha: z.union([z.number(), z.string()]),
      categorias: z.array(z.enum(idsCategorias)).min(1),
      tipo: bilingue(),
      papel: bilingue(),
      creditos: z.array(z.object({ rol: bilingue(), nombre: z.string() })).default([]),
      // Si es un trabajo de clase y qué pedía el ejercicio (Elías, 5/11/2026: antes no se decía).
      academico: z.boolean().default(false),
      encargo: bilingue(35).optional(),
      // Opcional: en HDYFAGM Elías no quiere esa frase grande (5/11/2026).
      intencion: bilingue(20).optional(),
      concepto: bilingue(60),
      desarrollo: bilingue(60),
      portada: image(),
      // Videoclips (6/11/2026): el vídeo de YouTube es la primera diapositiva del visor.
      // «fotograma» es la imagen 16:9 que se ve antes de darle a reproducir.
      video: z
        .object({ youtube: z.string(), fotograma: image(), pie: bilingue(12).optional() })
        .optional(),
      // Imágenes que salen al azar en el inicio al pasar por una categoría.
      showcase: z.array(image()).min(1),
      imagenes: z.array(
        z.object({
          src: image(),
          formato: z.enum(['completa', 'mitad', 'tercio']),
          // Fondo en el visor. Si no se pone: las fotografías (JPG) salen completas, sin lámina,
          // y los objetos recortados y las dobles páginas (WebP), sobre lámina negra.
          fondo: z.enum(['negro', 'ninguno']).optional(),
          alt: bilingue(),
          pie: bilingue(12).optional(),
        }),
      ),
    }),
});

export const collections = { proyectos };
