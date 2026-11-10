import { getCollection, type CollectionEntry } from 'astro:content';
import type { CategoriaId } from './config';

export type Proyecto = CollectionEntry<'proyectos'>;

export async function getProyectos(categoria?: CategoriaId) {
  const todos = await getCollection('proyectos');
  return todos
    .filter((p) => !categoria || p.data.categorias.includes(categoria))
    .sort((a, b) => a.data.orden - b.data.orden);
}

export async function getSiguiente(actual: Proyecto) {
  const todos = await getProyectos();
  const i = todos.findIndex((p) => p.id === actual.id);
  return todos[(i + 1) % todos.length];
}
