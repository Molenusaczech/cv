import type { ReactNode } from "react"
import { Card } from "@workspace/ui/components/card"

type TextCardProps = {
    title: string
    children: ReactNode
}

export default function TextCard({ title, children }: TextCardProps) {
    return (
        <Card className="w-full max-w-xs gap-5 px-8 py-8 shadow-sm md:max-w-2xl">
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {children}
                </p>
            </div>
        </Card>
    )
}
