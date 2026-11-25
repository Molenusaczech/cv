import Profile from "@/components/cv/profile"
import ThemeToggle from "@/components/theme-toggle"
import SkillsCard, { SkillBar } from "@/components/cv/skillsCard"
import SmallSkill from "@/components/cv/smallskill"
import SmallSkillCard from "@/components/cv/smallskillcard"
import TextCard from "@/components/cv/textCard"
import EducationCard from "@/components/cv/educationCard"
import rajtslegrData from "@/data/rajtslegr"
import { Button, buttonVariants } from "@workspace/ui/components/button"
import {
  Accessibility, Atom, Binary, Box, Braces, Code2, CodeXml, Database,
  FileCode2, FileSpreadsheet, Laptop, Network, PanelsTopLeft, Printer,
  Server, Sparkles, Terminal, Workflow,
} from "lucide-react"
import Link from "next/link"
import ReactCountryFlag from "react-country-flag"
import { Metadata } from "next"
import AchievementsCard from "@/components/cv/achievementsCard"
import TextLink from "@/components/text-link"

export const metadata: Metadata = {
  title: "Daniel Rajtšlégr",
  openGraph: {
    title: "Daniel Rajtšlégr",
    description: "I'm a 20-year-old guy who loves making things: coding, organizing tournaments, making videos, 3D printing, etc. My passion is gaming of all kinds. I especially like card games such as Magic: The Gathering and Scratch Wars."
  }
}

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center p-6 gap-4">
      <ThemeToggle />
      <Profile profile={rajtslegrData} />
      <TextCard
        title="About me"
      >
        I'm a 20-year-old guy who loves making things: coding, organizing tournaments, making videos, 3D printing, etc.
        My passion is gaming of all kinds. I especially like card games such as Magic: The Gathering and Scratch Wars.
      </TextCard>
      <SkillsCard subheader='In Czech, we say "Kolik jazyků znáš, tolikrát jsi člověkem." (The more languages you know, the more times you are a person.)' title="Languages">
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
            description: (<Link target="_blank" href="/docs/StatementOfResult.pdf" className={"w-full " + buttonVariants()}>
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
      <SmallSkillCard title="Skills" subheader="I love learning new things, so I have quite a few skills.">
        <SmallSkill skill={{
          name: "JavaScript/TypeScript",
          icon: <FileCode2 className="size-4" />,
          summary: "Advanced",
          description: <>
            My most-used language. <br></br>
            Used in Červené kombo and Tour de App 2024 <br></br>
            This website is written in TypeScript!
          </>,
          progress: 0.8
        }} />
        <SmallSkill skill={{
          name: "React",
          icon: <Atom className="size-4" />,
          summary: "Intermediate",
          progress: 0.5
        }} />
        <SmallSkill skill={{
          name: "Next.js",
          icon: <PanelsTopLeft className="size-4" />,
          summary: "Intermediate",
          description: <>
            Learned while creating Červené kombo. <br></br>
            Used in recent projects, including this website.
          </>,
          progress: 0.5
        }} />
        <SmallSkill skill={{
          name: "Prisma ORM",
          icon: <Database className="size-4" />,
          summary: "Intermediate",
          description: <>
            Used for a few non-public prototypes.
          </>,
          progress: 0.4
        }} />
        <SmallSkill skill={{
          name: "Sequelize ORM",
          icon: <Workflow className="size-4" />,
          summary: "Beginner",
          description: <>
            Used for Tour de App 2024.
          </>,
          progress: 0.2
        }} />
        <SmallSkill skill={{
          name: "PHP",
          icon: <CodeXml className="size-4" />,
          summary: "Advanced",
          description: <>
            My first web language <br></br>
            Used in Tour de App 2023 and a couple smaller web projects.
          </>,
          progress: 0.5
        }} />
        <SmallSkill skill={{
          name: "Python",
          icon: <Terminal className="size-4" />,
          summary: "Advanced",
          description: <>
            Main language for FI MUNI courses. <br></br>
          </>,
          progress: 0.6
        }} />
        <SmallSkill skill={{
          name: "Nette",
          icon: <Server className="size-4" />,
          summary: "Beginner",
          description: <>
            Used in Tour de App 2023.
          </>,
          progress: 0.1
        }} />
        <SmallSkill skill={{
          name: "Solidworks",
          icon: <Box className="size-4" />,
          summary: "Intermediate",
          description: <>
            Used in high school for CAD lessons and 3D printing while I had an educational license.
          </>,
          progress: 0.4
        }} />
        <SmallSkill skill={{
          name: "3D Printing",
          icon: <Printer className="size-4" />,
          summary: "Advanced",
          description: <>
            I own a Prusa Mini+, which I used to decorate the Ráječko Christmas tree. <br></br>
            I'm especially interested in Print-in-Place models.
          </>,
          progress: 0.8
        }} />
        <SmallSkill skill={{
          name: "Walking on crutches",
          icon: <Accessibility className="size-4" />,
          summary: "Master",
          description: <>
            I've been walking on French crutches since I was little because of my disability. <br></br>
            I also know a few tricks. ;)
          </>,
          progress: 1
        }} />
        <SmallSkill skill={{
          name: "Microsoft Office",
          icon: <FileSpreadsheet className="size-4" />,
          summary: "Master",
          description: <>
            Using my Excel skills to create administrative spreadsheets for Ráječko. <br></br>
            ECDL certificate holder in Word, Excel, PowerPoint, and cybersecurity.
          </>,
          progress: 0.9
        }} />
        <SmallSkill skill={{
          name: "Kotlin",
          icon: <Braces className="size-4" />,
          summary: "Learning",
          description: <>
            Started learning it when I joined the GateCraft team, as the codebase is written entirely in Kotlin.
          </>,
          progress: 0.1
        }} />
        <SmallSkill skill={{
          name: "AI-assisted coding",
          icon: <Sparkles className="size-4" />,
          summary: "Learning",
          description: <>
            I've used GitHub Copilot since its launch, and now use it as a harness with the OpenAI integration. A lot of this website was written with it.
          </>,
          progress: 0.3
        }} />
        <SmallSkill skill={{
          name: "Haskell",
          icon: <Binary className="size-4" />,
          summary: "Beginner",
          description: <>
            Used in a university course.
          </>,
          progress: 0.2
        }} />
        <SmallSkill skill={{
          name: "C",
          icon: <Code2 className="size-4" />,
          summary: "Beginner",
          description: <>
            Used in a university course.
          </>,
          progress: 0.1
        }} />
        <SmallSkill skill={{
          name: ".NET",
          icon: <Laptop className="size-4" />,
          summary: "Beginner",
          description: <>
            Used in high school and a university course.
          </>,
          progress: 0.2
        }} />
        <SmallSkill skill={{
          name: "PlantUML",
          icon: <Network className="size-4" />,
          summary: "Beginner",
          description: <>
            Used in a university course.
          </>,
          progress: 0.1
        }} />

      </SmallSkillCard>
      <EducationCard entries={[
        {
          institution: "Faculty of Informatics, Masaryk University",
          program: "Programming and Development",
          period: "2025 - Ongoing",
          content: <>
            Finished my first year (two semesters) with a 1.38 average (7th out of 163 students in the program). <br></br>
            Attended some very interesting courses, such as Generative Design Programming.
          </>
        },
        {
          institution: "SPŠ Jedovnice",
          program: "Information Technology",
          period: "2021 - 2025",
          content: <>
            Graduated at the top of my class. Represented our school in many competitions, such as Tour de App. <br></br>
            Learned a lot about engineering and electronics in addition to IT. <br></br>
            Was a member of the robotics team, where I developed a new line-following concept that soon became the standard. <br></br>
            Earned a 1.00 average on the Maturita exam. Passed advanced mathematics (25 points, 65.7th percentile), standard mathematics (44 points, 92.5th percentile), and Czech (43 points, 86.5th percentile).
          </>
        }
      ]} />

      <EducationCard title="Work experience" entries={[
        {
          institution: "Obec Ráječko",
          program: "Council member",
          period: "2026 - ongoing",
          content: <p>
            Elected in 2026. Member of the Finance Committee and the Development and Information Technology Committee.
            Manage the official Instagram, Facebook, and website.
          </p>
        },
        {
          institution: "Scratch Wars (Notre Game and Wormelen Group)",
          program: "Community manager",
          period: "2021 - 2025",
          content: <p>
            Started as a moderator, became a tournament organizer, and eventually moved into an administrator role, overseeing tournaments and community management.
            Onboarded more than five tournament staff members. Under my leadership, the average tournament player count increased by 600%.
            <br></br>
            Volunteer position
          </p>
        }
      ]} />

      <AchievementsCard entries={[
        {
          title: "Tour de App 2023",
          emoji: "🥉",
          description: <>
            <TextLink href="https://tourdeapp.com/">Tour de App</TextLink> is a team web development competition for high school students. <br></br>
            Worked with my classmate <TextLink href="https://github.com/Zero5G">Jakub Manoušek</TextLink> <br></br>
            The competition is not only about programming, as communicating with a client is a big part of it. <br></br>
            The final was a two-day hackathon that involved building a new app from scratch and presenting it to a large audience.
          </>,
          subtitle: "3rd place",
          highlight: "bronze"
        },
        {
          title: "Scratch Wars World Cup 2022",
          emoji: "🏆",
          description: <>
            Scratch Wars was a Czech trading card game that I had been playing since 2017. <br></br>
            I won many tournaments in several cities. After five years of placing in the top 10 at the World Cups, my efforts finally paid off.
          </>,
          subtitle: "1st place",
          highlight: "gold"
        },
        {
          title: "Lego Robo League 2022",
          emoji: "🏆",
          description: <>
            <TextLink href="https://robotikahrave.cz/robo-lego-liga/">Lego Robo League</TextLink> is a league made up of several robotics competitions across Czechia. <br></br>
            I perfected a moving-sensor line-following concept that uses a single sensor on a moving probe. It proved much faster than a static-sensor PID system.
          </>,
          subtitle: "1st place",
          highlight: "gold"
        },
        {
          title: "Tour de App 2024",
          emoji: "4️⃣",
          description: <>
            <TextLink href="https://tourdeapp.com/">Tour de App</TextLink> is a team web development competition for high school students. <br></br>
            Worked with my classmate <TextLink href="https://github.com/TZT868">Maxim Vašíček</TextLink> and friend <TextLink href="https://strizova.com/">Eva Střížová</TextLink> <br></br>
            The competition is not only about programming, as communicating with a client is a big part of it. <br></br>
            The final was a three-day hackathon that involved building a new app from scratch and presenting it to a large audience.
            That year, the theme of the final was AI, which made the challenge quite difficult because AI was not yet very powerful. <br></br>
            <TextLink href="https://robotikahrave.cz/2024/04/tour-de-app-2024/">
              Article I wrote about it for our school (in Czech only)
            </TextLink>
          </>,
          subtitle: "4th of 115"
        },
        {
          title: "KSI 2025",
          emoji: "✅",
          description: <>
            <TextLink href="https://ksi.fi.muni.cz/">KSI</TextLink> is an individual algorithm competition organised by the students of FI MUNI. <br></br>
            Each year has four themed blocks. This year, they were data structures, functional programming, OOP, and assembly.
          </>,
          subtitle: "Successful",
          highlight: "green"
        },
        {
          title: "Tour de App 2024 CTF",
          emoji: "🏆",
          description: <>
            A puzzle and cybersecurity side competition held alongside <TextLink href="https://tourdeapp.com/">Tour de App</TextLink> 2024. <br></br>
            It consisted of 20 flags (15 online and 5 in person at the hackathon). Our team found 12 of them, earning us first place.
            Some interesting challenges included hexadecimal Sudoku and a sign on a Minecraft server that could be found using Nmap.
          </>,
          subtitle: "1st place",
          highlight: "gold"
        }
      ]} />
    </main>
  )
}
