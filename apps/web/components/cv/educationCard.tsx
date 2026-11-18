import type { ReactNode } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@workspace/ui/components/accordion"
import { Card } from "@workspace/ui/components/card"

export type EducationEntry = {
    institution: string
    program: string
    period: string
    content: ReactNode
}

type EducationCardProps = {
    entries: EducationEntry[]
    title?: string
}

export default function EducationCard({ entries, title = "Education" }: EducationCardProps) {
    return (
        <Card className="w-full max-w-xs gap-5 px-6 py-6 shadow-sm md:max-w-4xl">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div>
                <Accordion multiple>
                    {entries.map((entry, index) => (
                        <div className="relative grid grid-cols-[1rem_minmax(0,1fr)] gap-4" key={`${entry.institution}-${entry.program}`}>
                            <span aria-hidden="true" className="relative flex justify-center">
                                <span className="z-10 mt-5 size-2 rounded-full bg-primary ring-4 ring-card" />
                                {index < entries.length - 1 && (
                                    <span className="absolute -bottom-5 left-1/2 top-5 w-px -translate-x-1/2 bg-border" />
                                )}
                            </span>
                            <AccordionItem value={`${entry.institution}-${entry.program}`}>
                                <AccordionTrigger>
                                    <span className="min-w-0">
                                        <span className="block">{entry.program}</span>
                                        <span className="mt-1 block text-sm font-normal text-muted-foreground">
                                            {entry.institution} · {entry.period}
                                        </span>
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="leading-relaxed">{entry.content}</div>
                                </AccordionContent>
                            </AccordionItem>
                        </div>
                    ))}
                </Accordion>
            </div>
        </Card>
    )
}
