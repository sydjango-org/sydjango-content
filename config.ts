import { z, defineCollection } from "astro:content";

const eventsCollection = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean().optional().default(false),
    title: z.string().min(1, "Title is required"),
    date: z.date(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().optional(),
  }),
});

export const collections = {
  events: eventsCollection,
  "static-pages": pagesCollection,
};
