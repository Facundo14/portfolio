import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"
import { type Post, PostSchema } from "@/types"
import { z } from "zod"

const rootDirectory = path.join(process.cwd(), "content")

/**
 * Lee un post por su slug.
 * Busca en: content/blog/<slug>.mdx
 */
export async function getPostBySlug(slug: string) {
  const filePath = path.join(rootDirectory, "blog", `${slug}.mdx`)

  try {
    if (!fs.existsSync(filePath)) {
      console.error(`Post not found: ${slug}`)
      return null
    }

    const fileContent = fs.readFileSync(filePath, "utf8")
    const { content, data } = matter(fileContent)

    try {
      const validatedData = PostSchema.parse({
        ...data,
        slug,
      })

      const mdxSource = await compileMDX({
        source: content,
        options: { parseFrontmatter: false },
      })

      return {
        content: mdxSource.content,
        frontmatter: validatedData,
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error(`Validation error in ${slug}:`, error.errors)
      } else {
        console.error(`Error compiling MDX for ${slug}:`, error)
      }
      return null
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return null
  }
}

/**
 * Devuelve todos los posts ordenados por fecha descendente.
 * Lee todos los archivos .mdx de: content/blog/
 */
export async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(rootDirectory, "blog")

  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn("Blog directory does not exist:", postsDirectory)
      return []
    }

    const filenames = fs.readdirSync(postsDirectory)

    const posts = filenames
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContent = fs.readFileSync(filePath, "utf8")
        const { data } = matter(fileContent)
        const slug = filename.replace(/\.mdx$/, "")

        try {
          return PostSchema.parse({
            ...data,
            slug,
          })
        } catch (error) {
          if (error instanceof z.ZodError) {
            console.error(`Validation error in ${filename}:`, error.errors)
          }
          return null
        }
      })
      .filter((post): post is Post => post !== null)
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })

    return posts
  } catch (error) {
    console.error("Error reading posts directory:", error)
    return []
  }
}

/**
 * Devuelve todos los slugs disponibles (para generateStaticParams).
 */
export async function getPostSlugs(): Promise<string[]> {
  const postsDirectory = path.join(rootDirectory, "blog")

  try {
    if (!fs.existsSync(postsDirectory)) {
      return []
    }

    const filenames = fs.readdirSync(postsDirectory)
    return filenames
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => filename.replace(/\.mdx$/, ""))
  } catch (error) {
    console.error("Error reading post slugs:", error)
    return []
  }
}