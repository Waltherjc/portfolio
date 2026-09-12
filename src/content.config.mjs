import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Controls the order of the parts list on the home and work pages.
    order: z.number(),
    // Null where no photograph of the project exists in the repo yet.
    hero: z.string().nullable().default(null),
    tags: z.array(z.string()).default([]),
    meta: z
      .array(z.object({ field: z.string(), value: z.string() }))
      .default([]),
  }),
});

export const collections = { projects };
