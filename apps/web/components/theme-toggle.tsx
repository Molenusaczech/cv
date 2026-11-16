"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@workspace/ui/components/button"

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted && resolvedTheme === "dark"

    return (
        <Button
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="fixed right-6 bottom-6 z-50 size-12 rounded-full shadow-lg"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            size="icon-lg"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            variant="default"
        >
            {isDark ? (
                <Sun aria-hidden="true" className="size-5" />
            ) : (
                <Moon aria-hidden="true" className="size-5" />
            )}
        </Button>
    )
}
