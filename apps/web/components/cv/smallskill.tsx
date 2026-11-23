import type { ReactNode } from "react"
import { Info } from "lucide-react"

type SmallSkillData = {
    name: string
    icon: ReactNode
    summary: string
    description?: ReactNode
    progress: number
}

type SmallSkillProps = {
    skill: SmallSkillData
}

export default function SmallSkill({ skill }: SmallSkillProps) {
    const progress = Math.min(Math.max(skill.progress, 0), 1)
    const descriptionId = `small-skill-description-${skill.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
    const hasDescription = Boolean(skill.description)

    return (
        <article
            aria-describedby={skill.description ? descriptionId : undefined}
            className={`group relative rounded-md border bg-background/50 p-3 ${hasDescription ? "transition-colors hover:z-[60] hover:bg-muted/40 focus-within:z-[60] focus-within:bg-muted/40" : ""}`}
            tabIndex={hasDescription ? 0 : undefined}
        >
            {hasDescription && (
                <Info
                    aria-hidden="true"
                    className="absolute right-2 top-2 size-4 text-muted-foreground"
                />
            )}
            <div className={`flex items-center gap-2 ${hasDescription ? "pr-5" : ""}`}>
                <span className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded bg-primary/10 text-primary">
                    {skill.icon}
                </span>
                <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">{skill.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{skill.summary}</span>
                </span>
            </div>
            <div
                aria-label={`${skill.name} proficiency`}
                aria-valuemax={1}
                aria-valuemin={0}
                aria-valuenow={progress}
                aria-valuetext={`${Math.round(progress * 100)}%`}
                className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"
                role="progressbar"
            >
                <span
                    className="block h-full rounded-full bg-primary transition-[width]"
                    style={{ width: `${progress * 100}%` }}
                />
            </div>
            {skill.description && (
                <div
                    className="invisible absolute left-0 top-full z-[9999] mt-2 w-full rounded-md border bg-popover p-3 text-sm text-popover-foreground opacity-0 shadow-md group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                    id={descriptionId}
                >
                    {skill.description}
                </div>
            )}
        </article>
    )
}
