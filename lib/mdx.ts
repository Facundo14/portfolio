import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"

const rootDirectory = path.join(process.cwd(), "content")

export async function getPostBySlug(slug: string) {
  const filePath = path.join(rootDirectory, "blog", `${slug}.mdx`)

  try {
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { content, data } = matter(fileContent)

    const mdxSource = await compileMDX({
      source: content,
      options: { parseFrontmatter: true },
    })

    return {
      content: mdxSource,
      frontmatter: {
        slug,
        ...data,
      },
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return null
  }
}

export async function getAllPosts() {
  const postsDirectory = path.join(rootDirectory, "blog")

  try {
    const filenames = fs.readdirSync(postsDirectory)

    const posts = filenames
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContent = fs.readFileSync(filePath, "utf8")
        const { data } = matter(fileContent)
        const slug = filename.replace(/\.mdx$/, "")

        return {
          slug,
          ...data,
        }
      })
      .sort((a, b) => {
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        }
        return 0
      })

    return posts
  } catch (error) {
    console.error("Error reading posts directory:", error)
    return []
  }
}

