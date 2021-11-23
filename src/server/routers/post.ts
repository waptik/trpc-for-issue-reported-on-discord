/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */

import { z } from 'zod';

import { createRouter } from '../createRouter';

export const postRouter = createRouter().query('byName', {
  input: z.object({
    name: z.string(),
  }),
  resolve({ input }) {
    const name = input.name;
    const at = new Date().toLocaleDateString();
    return { name, at };
  },
});
