import { defineConfig, s } from 'velite'

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
  collections: {
    posts: {
      name: 'Post', // collection type name
      pattern: 'posts/*.mdx', // content files glob pattern
      schema: s
        .object({
          title: s.string().max(99), // Zod primitive type
          publishedAt: s.string(),
          description: s.string(),
          content: s.markdown(), // transform markdown to html,
          slug: s.path().transform(path => path.replace(/^posts\/|\.mdx$/g, '')), // generate slug from file name
        })
    },
  }
})