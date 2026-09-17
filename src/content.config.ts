import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const markdownOrJson = ["**/*.{md,mdx,json}", "!**/README.md"] as const;

const editorialSchema = z
  .object({
    title: z.string().optional(),
    locale: z.string().optional(),
    product: z.string().optional(),
    hub: z.string().optional(),
    draft: z.boolean().optional(),
  })
  .passthrough();

const dataSchema = z
  .object({
    id: z.string().optional(),
    locale: z.string().optional(),
  })
  .passthrough();

const articles = defineCollection({
  loader: glob({
    pattern: [...markdownOrJson],
    base: "./content/articles",
  }),
  schema: editorialSchema,
});

const magazines = defineCollection({
  loader: glob({
    pattern: [...markdownOrJson],
    base: "./content/magazines",
  }),
  schema: editorialSchema,
});

const translations = defineCollection({
  loader: glob({
    pattern: [...markdownOrJson],
    base: "./content/translations",
  }),
  schema: editorialSchema,
});

const taxonomies = defineCollection({
  loader: glob({
    pattern: [...markdownOrJson],
    base: "./data/taxonomies",
  }),
  schema: dataSchema,
});

const authors = defineCollection({
  loader: glob({
    pattern: [...markdownOrJson],
    base: "./data/authors",
  }),
  schema: dataSchema,
});

const keywords = defineCollection({
  loader: glob({
    pattern: [...markdownOrJson],
    base: "./data/keywords",
  }),
  schema: dataSchema,
});

const videos = defineCollection({
  loader: glob({
    pattern: [...markdownOrJson],
    base: "./videos",
  }),
  schema: editorialSchema,
});

export const collections = {
  articles,
  magazines,
  translations,
  taxonomies,
  authors,
  keywords,
  videos,
};
