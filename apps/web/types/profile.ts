import type { LucideIcon } from "lucide-react"

type SkillData = {
    name: string,
    icon: LucideIcon,
    summary: string,
    description: string,
    delimiters: string[],
    progress: number
}

type ProfileData = {
    firstName: string,
    lastName: string,
    motto: string,
    photo: string,
    profilePicture: string,
    skills: SkillData[]
}

export type { ProfileData, SkillData }
