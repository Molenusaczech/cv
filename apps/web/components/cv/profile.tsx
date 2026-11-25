import Image from "next/image"
import type { ProfileData } from "@/types/profile"
import { Card } from "@workspace/ui/components/card"
import { Mail, Phone } from "lucide-react"

export default function Profile({ profile }: { profile: ProfileData }) {
    const fullName = `${profile.firstName} ${profile.lastName}`

    return (
        <Card className="w-full max-w-xs items-center gap-5 px-8 py-8 text-center shadow-sm md:max-w-4xl md:flex-row md:gap-8 md:text-left">
            <div
                aria-label={`Profile photo of ${fullName}`}
                className="group/avatar relative size-36 rounded-full [perspective:900px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                role="img"
                tabIndex={0}
            >
                <div className="relative size-full rounded-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover/avatar:[transform:rotateY(180deg)] group-focus/avatar:[transform:rotateY(180deg)] motion-reduce:transition-none">
                    <Image
                        alt=""
                        className="rounded-full border-4 border-background object-cover shadow-[0_0_0_1px_var(--color-border)] [backface-visibility:hidden]"
                        fill
                        sizes="144px"
                        src={profile.photo}
                        unoptimized
                    />
                    <Image
                        alt=""
                        aria-hidden="true"
                        className="rounded-full border-4 border-background object-cover shadow-[0_0_0_1px_var(--color-border)] [backface-visibility:hidden] [transform:rotateY(180deg)]"
                        fill
                        sizes="144px"
                        src={profile.profilePicture}
                        unoptimized
                    />
                </div>
            </div>
            <div className="space-y-2 md:flex-1">
                <h2 className="text-2xl font-semibold">{fullName}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {profile.motto}
                </p>
                <nav aria-label="Contact links" className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm md:justify-start">
                    {profile.githubUrl && (
                        <a className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground" href={profile.githubUrl} rel="noreferrer" target="_blank">
                            <Image alt="" aria-hidden="true" className="size-4 dark:invert" height={16} src="/img/github.svg" width={16} />
                            GitHub
                        </a>
                    )}
                    {profile.linkedinUrl && (
                        <a className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground" href={profile.linkedinUrl} rel="noreferrer" target="_blank">
                            <Image alt="" aria-hidden="true" className="size-4 dark:invert" height={16} src="/img/icons/LinkedIn.svg" width={16} />
                            LinkedIn
                        </a>
                    )}
                    {profile.email && (
                        <a className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground" href={`mailto:${profile.email}`}>
                            <Mail aria-hidden="true" className="size-4" />
                            {profile.email}
                        </a>
                    )}
                    {profile.phone && (
                        <a className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground" href={`tel:${profile.phone}`}>
                            <Phone aria-hidden="true" className="size-4" />
                            {profile.phone}
                        </a>
                    )}
                </nav>
            </div>
        </Card>
    )
}
