import type { ReactNode } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
import { Card } from "@workspace/ui/components/card"

export type ProjectTechnology = {
    name: string
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
}

export type ProjectProps = {
    image: string
    imageAlt: string
    title: string
    subtitle: string
    description: ReactNode
    technologies: ProjectTechnology[]
    githubUrl?: string
    webUrl?: string
}

export function Project({
    image,
    imageAlt,
    title,
    subtitle,
    description,
    technologies,
    githubUrl,
    webUrl
}: ProjectProps) {
    return (
        <Card className="h-full shadow-sm">
            <div className="relative aspect-video w-full">
                <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 448px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col gap-4 px-6 pb-6">
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{subtitle}</p>
                </div>
                <div className="text-sm leading-relaxed">{description}</div>
                {technologies.length > 0 && (
                    <ul aria-label={`${title} technologies`} className="flex flex-wrap gap-2">
                        {technologies.map(({ name, variant }) => (
                            <li key={name}><Badge variant={variant}>{name}</Badge></li>
                        ))}
                    </ul>
                )}
                {(githubUrl || webUrl) && (
                    <div className="mt-auto flex flex-wrap gap-3 border-t border-border pt-4">
                        {githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${title} on GitHub`} title="GitHub" className="inline-flex size-9 items-center justify-center rounded-md text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                <Image src="/img/github.svg" alt="" width={18} height={18} aria-hidden="true" className="dark:invert" />
                            </a>
                        )}
                        {webUrl && (
                            <a href={webUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${title} website`} title="Website" className="inline-flex size-9 items-center justify-center rounded-md text-primary transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                <ExternalLink aria-hidden="true" className="size-5" />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </Card>
    )
}

type ProjectCardProps = {
    projects: ProjectProps[]
    title?: string
}

export default function ProjectCard({ projects, title = "Projects" }: ProjectCardProps) {
    return (
        <section aria-labelledby="projects-heading" className="w-full max-w-4xl space-y-5">
            <h2 id="projects-heading" className="text-2xl font-semibold">{title}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {projects.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </section>
    )
}
