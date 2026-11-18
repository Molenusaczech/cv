"use client"

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { ChevronDown } from "lucide-react"
import type { ComponentProps } from "react"
import { cn } from "cn"

function Accordion({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root className={cn("w-full", className)} {...props} />
}

function AccordionItem({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) {
    return <AccordionPrimitive.Item className={cn("group/accordion-item border-b last:border-b-0", className)} {...props} />
}

function AccordionTrigger({ className, children, ...props }: ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
                className={cn(
                    "flex w-full items-center justify-between gap-4 py-4 text-left font-medium outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/50 [&[data-panel-open]>svg]:rotate-180",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-muted-foreground transition duration-200 group-hover/accordion-item:translate-y-0.5 group-hover/accordion-item:text-primary" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
}

function AccordionContent({ className, children, ...props }: ComponentProps<typeof AccordionPrimitive.Panel>) {
    return (
        <AccordionPrimitive.Panel
            className={cn(
                "h-(--accordion-panel-height) overflow-hidden text-sm text-muted-foreground transition-[height] data-[ending-style]:h-0 data-[starting-style]:h-0",
                className
            )}
            {...props}
        >
            <div className="pb-4">{children}</div>
        </AccordionPrimitive.Panel>
    )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
