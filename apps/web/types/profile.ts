import type { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

type SkillData = {
    name: string,
    icon: ReactNode,
    summary: string,
    description: ReactNode,
    delimiters: string[],
    progress: number
}

type ProfileData = {
    firstName: string,
    lastName: string,
    motto: string,
    photo: string,
    profilePicture: string
}

export type { ProfileData, SkillData }
