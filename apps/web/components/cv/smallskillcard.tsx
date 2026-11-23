import { Card } from "@workspace/ui/components/card"
import type { ReactNode } from "react"

type SmallSkillCardProps = {
    title: string
    subheader: string
    children: ReactNode
}

export default function SmallSkillCard({ title, subheader, children }: SmallSkillCardProps) {
    return (
        <Card className="w-full max-w-xs gap-5 overflow-visible px-6 py-6 shadow-sm md:max-w-4xl">
            <div className="space-y-1">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-sm text-muted-foreground">{subheader}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {children}
            </div>
        </Card>
    )
}
