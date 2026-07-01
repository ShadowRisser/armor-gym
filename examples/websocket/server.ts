import { defineAction } from "astro:actions"
import { z } from "astro:schema"

export const server = {
  ping: defineAction({
    input: z.object({
      message: z.string(),
    }),
    handler: async (input) => {
      return { response: `Echo: ${input.message}` }
    },
  }),
}
