import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const WORK_DIR = path.join(process.cwd(), 'content/work')

export interface ProjectMeta {
  slug: string
  title: string
  client: string
  services: string[]
  headline: string
  coverImage: string
  order: number
  featured?: boolean
  status?: string
}

export interface Project extends ProjectMeta {
  content: string
}

function ensureWorkDir() {
  if (!fs.existsSync(WORK_DIR)) {
    fs.mkdirSync(WORK_DIR, { recursive: true })
  }
}

export function getAllProjects(): ProjectMeta[] {
  ensureWorkDir()
  const files = fs.readdirSync(WORK_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const filepath = path.join(WORK_DIR, filename)
      const raw = fs.readFileSync(filepath, 'utf8')
      const { data } = matter(raw)
      return { slug, ...data } as ProjectMeta
    })
    .sort((a, b) => a.order - b.order)
}

export function getFeaturedProjects(): ProjectMeta[] {
  return getAllProjects().filter((p) => p.featured !== false)
}

export function getProject(slug: string): Project {
  const filepath = path.join(WORK_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filepath, 'utf8')
  const { data, content } = matter(raw)
  return { slug, ...data, content } as Project
}
