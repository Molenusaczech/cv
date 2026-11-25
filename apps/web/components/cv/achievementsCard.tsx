"use client"

import { useState, type ReactNode } from "react"
import { ArrowDownRight, ArrowUpLeft } from "lucide-react"
import { Card } from "@workspace/ui/components/card"

export type AchievementEntry = {
    title: string
    subtitle: string
    emoji: string
    description: ReactNode
    highlight?: "gold" | "silver" | "bronze" | "green"
}

type AchievementsCardProps = {
    entries: AchievementEntry[]
    title?: string
}

type AchievementCardEntryProps = {
    entry: AchievementEntry
    index?: number
    clickable?: boolean
    isSelected?: boolean
    onSelect?: () => void
}

const highlightStyles = {
    gold: "border-amber-400/70 bg-amber-400/10",
    silver: "border-slate-400/70 bg-slate-400/10",
    bronze: "border-orange-700/50 bg-orange-700/10",
    green: "border-green-400/50 bg-green-400/10"
} satisfies Record<NonNullable<AchievementEntry["highlight"]>, string>

const subtitleStyles = {
    gold: "text-amber-700 dark:text-amber-300",
    silver: "text-slate-700 dark:text-slate-300",
    bronze: "text-orange-800 dark:text-orange-300",
    green: "text-green-700 dark:text-green-300"
} satisfies Record<NonNullable<AchievementEntry["highlight"]>, string>

export function AchievementCardEntry({
    entry,
    index = 0,
    clickable = true,
    isSelected = false,
    onSelect
}: AchievementCardEntryProps) {
    const content = (
        <>
            <span className="flex flex-col items-center gap-2">
                <span aria-hidden="true" className="text-5xl leading-none">{entry.emoji}</span>
                <span className="font-medium">{entry.title}</span>
                <span className={`text-sm ${entry.highlight ? subtitleStyles[entry.highlight] : "text-muted-foreground"}`}>
                    {entry.subtitle}
                </span>
            </span>
            {(isSelected || !clickable) && (
                <span className="mt-4 block border-t border-border pt-4 text-left text-sm leading-relaxed text-foreground">
                    <span className="sr-only" id={`achievement-description-${index}`}>Description: </span>
                    {entry.description}
                </span>
            )}
            {clickable && (
                <span aria-hidden="true" className="absolute bottom-3 right-3 text-muted-foreground transition-colors group-hover:text-primary">
                    {isSelected
                        ? <ArrowUpLeft className="size-4" />
                        : <ArrowDownRight className="size-4" />}
                </span>
            )}
        </>
    )

    const className = `relative rounded-lg border p-5 ${clickable ? "pb-9 text-center transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-muted/60 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group" : "text-center"} ${entry.highlight ? highlightStyles[entry.highlight] : "bg-background/50"}`

    if (!clickable) {
        return <div className={className}>{content}</div>
    }

    return (
        <button
            aria-expanded={isSelected}
            aria-controls={`achievement-description-${index}`}
            className={className}
            onClick={onSelect}
            type="button"
        >
            {content}
        </button>
    )
}

export default function AchievementsCard({ entries, title = "Achievements" }: AchievementsCardProps) {
    const [selected, setSelected] = useState<string | null>(null)
    const selectedIndex = entries.findIndex((entry, index) => `${entry.title}-${index}` === selected)
    const gridColumns = (count: number) => count < 2
        ? "grid-cols-1"
        : count === 4
            ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
        : count < 3
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
    const renderEntries = (items: AchievementEntry[], startIndex: number) => items.map((entry, offset) => {
        const index = startIndex + offset
        const itemId = `${entry.title}-${index}`

        return (
            <AchievementCardEntry
                key={itemId}
                entry={entry}
                index={index}
                isSelected={selected === itemId}
                onSelect={() => setSelected(selected === itemId ? null : itemId)}
            />
        )
    })

    return (
        <Card className="w-full max-w-xs gap-5 px-6 py-6 shadow-sm md:max-w-4xl">
            <h2 className="text-2xl font-semibold">{title}</h2>
            {selectedIndex < 0 ? (
                <div className={`grid ${gridColumns(entries.length)} gap-3`}>
                    {renderEntries(entries, 0)}
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {selectedIndex > 0 && (
                        <div className={`grid ${gridColumns(selectedIndex)} gap-3`}>
                            {renderEntries(entries.slice(0, selectedIndex), 0)}
                        </div>
                    )}
                    <div className="grid grid-cols-1 gap-3">
                        {renderEntries(entries.slice(selectedIndex, selectedIndex + 1), selectedIndex)}
                    </div>
                    {selectedIndex < entries.length - 1 && (
                        <div className={`grid ${gridColumns(entries.length - selectedIndex - 1)} gap-3`}>
                            {renderEntries(entries.slice(selectedIndex + 1), selectedIndex + 1)}
                        </div>
                    )}
                </div>
            )}
        </Card>
    )
}
