import { defineCollection, z } from 'astro:content';

const eventCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    time: z.string(),
    location: z.string(),
    address: z.string().optional(),
    description: z.string(),
    link: z.string().url().optional(),
    organizer: z.string(),
    contact: z.string().optional(),
    entryFee: z.string().optional(),
    timeControl: z.string().optional(),
    rounds: z.number().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  events: eventCollection,
};
