import type { DocumentNode } from 'graphql'
import type { SvelteComponentTyped } from 'svelte'

export default class LoadData<T> extends SvelteComponentTyped<
  { query: DocumentNode; value: any; variables?: Record<string, unknown> },
  {},
  { default: { data: T } }
> {}
