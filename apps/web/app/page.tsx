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
    description: "I'm a 20 year old guy that loves to make stuff. Coding, organizing tournaments, videomaking, 3d printing etc. My passion is gaming of all kinds. I especially like card games like Magic the Gathering and Scratch Wars. "
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
      <SmallSkillCard title="Skills" subheader="I love learning new stuff, so there is quite the bunch">
        <SmallSkill skill={{
          name: "JavaScript/TypeScript",
          icon: <FileCode2 className="size-4" />,
          summary: "Advanced",
          description: <>
            My most used language <br></br>
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
            Used on recent projects (for example this website)
          </>,
          progress: 0.5
        }} />
        <SmallSkill skill={{
          name: "Prisma ORM",
          icon: <Database className="size-4" />,
          summary: "Intermediate",
          description: <>
            Used for a few non-public prototypes
          </>,
          progress: 0.4
        }} />
        <SmallSkill skill={{
          name: "Sequelize ORM",
          icon: <Workflow className="size-4" />,
          summary: "Beginner",
          description: <>
            Used for Tour de App 2024
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
            Main language for FI MUNI courses <br></br>
          </>,
          progress: 0.6
        }} />
        <SmallSkill skill={{
          name: "Nette",
          icon: <Server className="size-4" />,
          summary: "Beginner",
          description: <>
            Used in Tour de App 2023
          </>,
          progress: 0.1
        }} />
        <SmallSkill skill={{
          name: "Solidworks",
          icon: <Box className="size-4" />,
          summary: "Intermediate",
          description: <>
            Used in high school for CAD lessons and for 3D printing while I had the education licence
          </>,
          progress: 0.4
        }} />
        <SmallSkill skill={{
          name: "3D Printing",
          icon: <Printer className="size-4" />,
          summary: "Advanced",
          description: <>
            I own a Prusa Mini+, which I used to decorate the Ráječko christmas tree <br></br>
            I'm especially interested in Print-in-Place models.
          </>,
          progress: 0.8
        }} />
        <SmallSkill skill={{
          name: "Walking on crutches",
          icon: <Accessibility className="size-4" />,
          summary: "Master",
          description: <>
            Walking on french crutches since I was little due to my disability <br></br>
            I also know a few tricks ;)
          </>,
          progress: 1
        }} />
        <SmallSkill skill={{
          name: "Microsoft office",
          icon: <FileSpreadsheet className="size-4" />,
          summary: "Master",
          description: <>
            Using my excel skills to create spreadsheets for administrative of Ráječko <br></br>
            Holder of ECDL for Word, Excel, Powerpoint and Cybersecurity
          </>,
          progress: 0.9
        }} />
        <SmallSkill skill={{
          name: "Kotlin",
          icon: <Braces className="size-4" />,
          summary: "Learning",
          description: <>
            Started learning it when I joined the GateCraft team, since the codebase is 100% kotlin.
          </>,
          progress: 0.1
        }} />
        <SmallSkill skill={{
          name: "AI Assisted coding",
          icon: <Sparkles className="size-4" />,
          summary: "Learning",
          description: <>
            Using GitHub copilot since launch, now as a harness with the OpenAI integration (A lot of this website has been written using it)
          </>,
          progress: 0.3
        }} />
        <SmallSkill skill={{
          name: "Haskell",
          icon: <Binary className="size-4" />,
          summary: "Beginner",
          description: <>
            Used in a University course.
          </>,
          progress: 0.2
        }} />
        <SmallSkill skill={{
          name: "C",
          icon: <Code2 className="size-4" />,
          summary: "Beginner",
          description: <>
            Used in a University course.
          </>,
          progress: 0.1
        }} />
        <SmallSkill skill={{
          name: ".NET",
          icon: <Laptop className="size-4" />,
          summary: "Beginner",
          description: <>
            Used in High school and a University course.
          </>,
          progress: 0.2
        }} />
        <SmallSkill skill={{
          name: "PlantUML",
          icon: <Network className="size-4" />,
          summary: "Beginner",
          description: <>
            Used in a University course.
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
            Finished first year (2 semesters) with a 1.38 average (7th of 163 in programme) <br></br>
            Attended some very interesting courses (for example Generative design programming)
          </>
        },
        {
          institution: "SPŠ Jedovnice",
          program: "Information Technology",
          period: "2021 - 2025",
          content: <>
            Graduated on top of the class. Represented our school at many competitions (for example Tour de App). <br></br>
            Learned a lot about engineering and electronics apart from IT <br></br>
            Member of the robotics team, where I developed a new line follower concept, which became the standard not long after. <br></br>
            1.00 average on Maturita exam. Passed expanded math (25 points, 65.7 percentile), normal math (44 points, 92.5 percentile) and czech (43 points, 86.5 percentile).
          </>
        }
      ]} />

      <EducationCard title="Work experience" entries={[
        {
          institution: "Obec Ráječko",
          program: "Council member",
          period: "2026 - ongoing",
          content: <p>
            Elected in 2026, member of the Finance Comittee and member of the Development and Information Technology comittee.
            Running the official Instragram, Facebook and web pages. 
          </p>
        },
        {
          institution: "Scratch Wars (Notre Game and Wormelen Group)",
          program: "Community manager",
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
          description: <>
            <TextLink href="https://tourdeapp.com/">Tour de App</TextLink> is a team web development competition for high school students. <br></br>
            Worked with my classmate <TextLink href="https://github.com/Zero5G">Jakub Manoušek</TextLink> <br></br>
            The competiton is not only about programming, since a big part of it is communication with a client. <br></br>
            The final was a 2 day hackathon, which included building a new app from scratch and presenting it in front of a large audience.
          </>,
          subtitle: "3rd place",
          highlight: "bronze"
        },
        {
          title: "Scratch Wars World Cup 2022",
          emoji: "🏆",
          description: <>
            Scratch Wars was a czech TCG, which I have been playing since 2017. <br></br>
            Won many tournaments in several cities. After 5 years of ending up top 10 on world cups it finally paid off.
          </>,
          subtitle: "1st place",
          highlight: "gold"
        },
        {
          title: "Lego Robo League 2022",
          emoji: "🏆",
          description: <>
            <TextLink href="https://robotikahrave.cz/robo-lego-liga/">Lego Robo League</TextLink> is a league composed of several robotics competitions across Czechia. <br></br>
            I have perfected the moving sensor line follower concept, which consists of a single sensor on a moving probe, which turned out to be much faster than static sensor PID.
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
            The competiton is not only about programming, since a big part of it is communication with a client. <br></br>
            The final was a 3 day hackathon, which included building a new app from scratch and presenting it in front of a large audience.
            This year the theme of the final was AI, which was quite difficult, since AI was not that powerful yet. <br></br>
            <TextLink href="https://robotikahrave.cz/2024/04/tour-de-app-2024/">
              Article I wrote about it for our school (Czech only)
            </TextLink>
          </>,
          subtitle: "4th of 115"
        },
        {
          title: "KSI 2025",
          emoji: "✅",
          description: <>
            <TextLink href="https://ksi.fi.muni.cz/">KSI</TextLink> is an individual algorithm competition organised by the students of FI MUNI. <br></br>
            Each year has 4 themed blocks. This year it was: Data Structures, Functional programming, OOP and Assembly
          </>,
          subtitle: "Successful",
          highlight: "green"
        },
        {
          title: "Tour de App 2024 CTF",
          emoji: "🏆",
          description: <>
            A puzzle and cybersecurity sidecompetition running alongside <TextLink href="https://tourdeapp.com/">Tour de App</TextLink> 2024. <br></br>
            It consisted of 20 flags (15 online and 5 in-person at the hackathon). Our team found 12 of them, which earned us the first place.
            Some interesting ones included hexadecimal sudoku and a sign on a Minecraft server, which you could find by nmap.
          </>,
          subtitle: "1st place",
          highlight: "gold"
        }
      ]} />
    </main>
  )
}
