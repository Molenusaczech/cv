import { Card } from "@workspace/ui/components/card"
import type { SkillData } from "@/types/profile"
import { ReactNode } from "react"

type SkillsCardProps = {
    skills: SkillData[]
}

type SkillBarProps = {
    skill: SkillData
}

function SkillBar({ skill }: SkillBarProps) {
    const milestoneCount = skill.delimiters.length
    const completedMilestones = Math.min(
        Math.max(skill.progress, 0),
        milestoneCount
    )
    const progressPercent = completedMilestones === 0
        ? 0
        : milestoneCount <= 1
            ? 100
            : ((completedMilestones - 1) / (milestoneCount - 1)) * 100

    return (
        <article className="space-y-4 rounded-lg border bg-background/50 p-4">
            <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {skill.icon}
                </div>
                <div className="min-w-0 space-y-1">
                    <h3 className="font-medium">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">
                        {skill.summary}
                    </p>
                </div>
            </div>

            <div
                aria-label={`${skill.name} progress`}
                aria-valuemax={milestoneCount}
                aria-valuemin={0}
                aria-valuenow={completedMilestones}
                className="space-y-2"
                role="progressbar"
            >
                <div className="relative h-2 rounded-full bg-muted">
                    <div
                        className="absolute inset-y-0 left-0 rounded-full bg-primary transition-[width]"
                        style={{
                            width: progressPercent
                                ? `min(calc(${progressPercent}% + 0.375rem), 100%)`
                                : "0%"
                        }}
                    />
                    {skill.delimiters.map((delimiter, index) => {
                        const markerPercent = milestoneCount === 1
                            ? 100
                            : (index / (milestoneCount - 1)) * 100

                        return (
                            <span
                                aria-hidden="true"
                                className={`absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background ${index < completedMilestones ? "bg-primary" : "bg-muted-foreground/40"}`}
                                key={`${delimiter}-${index}`}
                                style={{ left: `${markerPercent}%` }}
                            />
                        )
                    })}
                </div>
                <div className="relative h-4 text-xs text-muted-foreground">
                    {skill.delimiters.map((delimiter, index) => (
                        <span
                            className={`absolute whitespace-nowrap ${index === 0
                                ? "text-left"
                                : index === milestoneCount - 1
                                    ? "-translate-x-full text-right"
                                    : "-translate-x-1/2 text-center"}`}
                            key={`${delimiter}-label-${index}`}
                            style={{
                                left: `${milestoneCount === 1
                                    ? 100
                                    : (index / (milestoneCount - 1)) * 100}%`
                            }}
                        >
                            {delimiter}
                        </span>
                    ))}
                </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
                {skill.description}
            </p>
        </article>
    )
}

export default function SkillsCard({ title, subheader, children }: {
    title: string,
    subheader: string,
    children: ReactNode
}) {
    return (
        <Card className="w-full max-w-xs gap-5 px-6 py-6 shadow-sm md:max-w-4xl">
            <div className="space-y-1">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-sm text-muted-foreground">
                    {subheader}
                </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
                {children}
            </div>
        </Card>
    )
}

export { SkillBar }
