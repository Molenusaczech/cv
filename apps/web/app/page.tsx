import Profile from "@/components/cv/profile"
import ThemeToggle from "@/components/theme-toggle"
import SkillsCard, { SkillBar } from "@/components/cv/skillsCard"
import TextCard from "@/components/cv/textCard"
import EducationCard from "@/components/cv/educationCard"
import rajtslegrData from "@/data/rajtslegr"
import { Button, buttonVariants } from "@workspace/ui/components/button"
import { Code2 } from "lucide-react"
import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import { Metadata } from "next"
import AchievementsCard from "@/components/cv/achievementsCard"

export const metadata: Metadata = {
  title: "Daniel Rajtšlégr"
}

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center p-6 gap-4">
      <ThemeToggle />
      <Profile profile={rajtslegrData} />
      <TextCard
        title="About me"
      >
        I'm a 20 year old guy that loves to make stuff. Coding, organizing tournaments, videomaking, 3d printing etc.
        My passion is gaming of all kinds. I especially like card games like Magic the Gathering and Scratch Wars.
      </TextCard>
      <SkillsCard subheader='In Czech we say "Kolik jazyků znáš, tolikrát jsi člověkem." (How many languages you know, that many times you are a person.)' title="Languages">
        <SkillBar skill={
          {
            name: "Czech",
            icon: (<ReactCountryFlag countryCode="cz" svg className="w-full h-full" />),
            summary: "Native",
            description: (<>
              I can also understand Slovak, since our languages are similar.
            </>),
            delimiters: ["A1", "A2", "B1", "B2", "C1", "C2"],
            progress: 6
          }
        } />
        <SkillBar skill={
          {
            name: "English",
            icon: (<ReactCountryFlag countryCode="gb" svg className="w-full h-full" />),
            summary: "CAE (C1 Advanced) passed at C2 level (Grade A)",
            description: (<Link href="" className={"w-full " + buttonVariants()}>
              View certificate
            </Link>),
            delimiters: ["A1", "A2", "B1", "B2", "C1", "C2"],
            progress: 6
          }
        } />
        <SkillBar skill={
          {
            name: "Russian",
            icon: (<ReactCountryFlag countryCode="ru" svg className="w-full h-full" />),
            summary: "A2 - Elementary knowledge",
            description: (<></>),
            delimiters: ["A1", "A2", "B1", "B2", "C1", "C2"],
            progress: 2
          }
        } />

        <SkillBar skill={
          {
            name: "Japanese",
            icon: (<ReactCountryFlag countryCode="jp" svg className="w-full h-full" />),
            summary: "A1 - Beginner knowledge",
            description: (<></>),
            delimiters: ["A1", "A2", "B1", "B2", "C1", "C2"],
            progress: 1
          }
        } />
      </SkillsCard>
      <EducationCard entries={[
        {
          institution: "Faculty of Informatics, Masaryk University",
          program: "Programming and Development",
          period: "2025 - Ongoing",
          content: <>

          </>
        },
        {
          institution: "SPŠ Jedovnice",
          program: "Information Technology",
          period: "2021 - 2025",
          content: ""
        }
      ]} />

      <EducationCard title="Work experience" entries={[
        {
          institution: "Obec Ráječko",
          program: "Council member",
          period: "2026 - ongoing",
          content: <p>
            Elected in 2026, member of the Finance Comittee and member of the Development and Information Technology comittee.
            Running the official Instragram and Facebook pages.
          </p>
        },
        {
          institution: "Scratch Wars (Notre Game and Wormelen Group)",
          program: "Community management",
          period: "2021 - 2025",
          content: <p>
            Started out as a moderator, then became a tournament organizer, finally moved onto being an admin, which was in charge of tournaments and community management in general.
            Onboarded 5+ tournament staff.
            <br></br>
            Volunteer position
          </p>
        }
      ]} />

      <AchievementsCard entries={[
        {
          title: "Tour de App 2023",
          emoji: "🥉",
          description: <>Ahoj světě</>,
          subtitle: "3rd place",
          highlight: "bronze"
        },
        {
          title: "Scratch Wars World Cup 2022",
          emoji: "🏆",
          description: <>Ahoj světě</>,
          subtitle: "1st place",
          highlight: "gold"
        },
        {
          title: "Lego Robo League 2022",
          emoji: "🏆",
          description: <>Ahoj světě</>,
          subtitle: "1st place",
          highlight: "gold"
        },
        {
          title: "Tour de App 2024",
          emoji: "4️⃣",
          description: <>Ahoj světě</>,
          subtitle: "4th of 115"
        },
        {
          title: "KSI 2025",
          emoji: "✅",
          description: <>Ahoj světě</>,
          subtitle: "Successful",
          highlight: "green"
        },
        {
          title: "Tour de App 2024 CTF",
          emoji: "🏆",
          description: <>Ahoj světě</>,
          subtitle: "1st place",
          highlight: "gold"
        }
      ]} />
    </main>
  )
}
