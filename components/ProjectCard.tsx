import Link from 'next/link'
import Image from 'next/image'
import type { ProjectMeta } from '@/lib/projects'

interface Props {
  project: ProjectMeta
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/${project.slug}`}
      className="group block"
    >
      {/* Cover image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface mb-5">
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
      </div>

      {/* Meta */}
      <p className="text-xs text-muted tracking-widest uppercase mb-2">
        {project.client}
      </p>
      <h3 className="text-light text-lg sm:text-xl leading-snug mb-3 transition-opacity duration-300 group-hover:opacity-70">
        {project.title}
      </h3>
      <p className="text-xs text-muted/70 tracking-widest uppercase">
        View →
      </p>
    </Link>
  )
}
