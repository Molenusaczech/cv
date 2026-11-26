import Profile from "@/components/cv/profile"
import ThemeToggle from "@/components/theme-toggle"
import SkillsCard, { SkillBar } from "@/components/cv/skillsCard"
import SmallSkill from "@/components/cv/smallskill"
import SmallSkillCard from "@/components/cv/smallskillcard"
import TextCard from "@/components/cv/textCard"
import ProjectCard from "@/components/cv/projectCard"
import EducationCard from "@/components/cv/educationCard"
import rajtslegrData from "@/data/rajtslegr"
import { Button, buttonVariants } from "@workspace/ui/components/button"
import {
  Accessibility, Atom, Binary, Box, Braces, Car, Code2, CodeXml, Database,
  DatabaseArrowDown,
  Drone,
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
    description: "I'm a 20-year-old who loves making things, including coding, organizing tournaments, making videos, and 3D printing. I'm passionate about gaming, especially card games such as Magic: The Gathering and Scratch Wars."
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
        I'm a 20-year-old who loves making things, including coding, organizing tournaments, making videos, and 3D printing.
        I'm passionate about gaming, especially card games such as Magic: The Gathering and Scratch Wars.
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
            summary: "A2 – Elementary proficiency",
            description: (<></>),
            delimiters: ["A1", "A2", "B1", "B2", "C1", "C2"],
            progress: 2
          }
        } />

        <SkillBar skill={
          {
            name: "Japanese",
            icon: (<ReactCountryFlag countryCode="jp" svg className="w-full h-full" />),
            summary: "A1 – Beginner proficiency",
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
            I've used it in recent projects, including this website.
          </>,
          progress: 0.5
        }} />
        <SmallSkill skill={{
          name: "Prisma ORM",
          icon: <Database className="size-4" />,
          summary: "Intermediate",
          description: <>
            I've used it for a few private prototypes.
          </>,
          progress: 0.4
        }} />
        <SmallSkill skill={{
          name: "Sequelize ORM",
          icon: <Workflow className="size-4" />,
          summary: "Beginner",
          description: <>
            I used it for Tour de App 2024.
          </>,
          progress: 0.2
        }} />
        <SmallSkill skill={{
          name: "PHP",
          icon: <CodeXml className="size-4" />,
          summary: "Advanced",
          description: <>
            My first web programming language. <br></br>
            Used in Tour de App 2023 and a couple of smaller web projects.
          </>,
          progress: 0.5
        }} />
        <SmallSkill skill={{
          name: "Python",
          icon: <Terminal className="size-4" />,
          summary: "Advanced",
          description: <>
            My main language for FI MUNI courses. <br></br>
          </>,
          progress: 0.6
        }} />
        <SmallSkill skill={{
          name: "Nette",
          icon: <Server className="size-4" />,
          summary: "Beginner",
          description: <>
            I used it for Tour de App 2023.
          </>,
          progress: 0.1
        }} />
        <SmallSkill skill={{
          name: "Solidworks",
          icon: <Box className="size-4" />,
          summary: "Intermediate",
          description: <>
            I used it for CAD classes and 3D printing in high school while I had an educational licence.
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
            I started learning it when I joined the GateCraft team because the codebase is written entirely in Kotlin.
          </>,
          progress: 0.1
        }} />
        <SmallSkill skill={{
          name: "SQL",
          icon: <DatabaseArrowDown className="size-4" />,
          summary: "Advanced",
          description: <>
            Used in a couple projects and a university course.
          </>,
          progress: 0.8
        }} />
        <SmallSkill skill={{
          name: "AI-assisted coding",
          icon: <Sparkles className="size-4" />,
          summary: "Learning",
          description: <>
            I've used GitHub Copilot since its launch and now use it as a harness with the OpenAI integration. Much of this website was written with its help.
          </>,
          progress: 0.3
        }} />
        <SmallSkill skill={{
          name: "Haskell",
          icon: <Binary className="size-4" />,
          summary: "Beginner",
          description: <>
            I used it in a university course.
          </>,
          progress: 0.2
        }} />
        <SmallSkill skill={{
          name: "C",
          icon: <Code2 className="size-4" />,
          summary: "Beginner",
          description: <>
            I used it in a university course.
          </>,
          progress: 0.1
        }} />
        <SmallSkill skill={{
          name: ".NET",
          icon: <Laptop className="size-4" />,
          summary: "Beginner",
          description: <>
            I used it in high school and in a university course.
          </>,
          progress: 0.2
        }} />
        <SmallSkill skill={{
          name: "PlantUML",
          icon: <Network className="size-4" />,
          summary: "Beginner",
          description: <>
            I used it in a university course.
          </>,
          progress: 0.1
        }} />
        <SmallSkill skill={{
          name: "Drone photography",
          icon: <Drone className="size-4" />,
          summary: "Advanced",
          description: <>
            I have an A0 licence, which allows me to fly camera drones weighing under 249 g. <br></br>
            I take pictures and videos of various places and events in Ráječko to publish on its official media channels. <br></br>
            One of my pictures was published by <TextLink href="https://my-face.cz/">MyFace</TextLink>.
          </>,
          progress: 0.8
        }} />
        <SmallSkill skill={{
          name: "Driving",
          icon: <Car className="size-4" />,
          summary: "Category B",
          description: <>
            I have category B driver's licence, but I can only drive cars with the accelerator on the left due to my disability.
          </>,
          progress: 0.9
        }} />

      </SmallSkillCard>
      <EducationCard entries={[
        {
          institution: "Faculty of Informatics, Masaryk University",
          program: "Programming and Development",
          period: "2025 - Ongoing",
          content: <>
            Completed my first year (two semesters) with a 1.38 average, ranking 7th out of 163 students in the program. <br></br>
            Took several interesting courses, including Generative Design Programming.
          </>
        },
        {
          institution: "SPŠ Jedovnice",
          program: "Information Technology",
          period: "2021 - 2025",
          content: <>
            Graduated at the top of my class and represented our school in several competitions, including Tour de App. <br></br>
            Learned about engineering and electronics in addition to IT. <br></br>
            As a member of the robotics team, I developed a new line-following concept that soon became the standard. <br></br>
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
            Elected in 2026. I serve on the Finance Committee and the Development and Information Technology Committee.
            I manage the municipality's official Instagram account, Facebook page, and website.
          </p>
        },
        {
          institution: "Scratch Wars (Notre Game and Wormelen Group)",
          program: "Community manager",
          period: "2021 - 2025",
          content: <p>
            I started as a moderator, became a tournament organizer, and eventually moved into an administrator role, overseeing tournaments and community management.
            I onboarded more than five tournament staff members. Under my leadership, the average number of players per tournament increased by 600%.
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
            I worked with my classmate <TextLink href="https://github.com/Zero5G">Jakub Manoušek</TextLink>. <br></br>
            The competition involves more than programming; communicating with a client is also a big part of it. <br></br>
            The final was a two-day hackathon during which we built a new app from scratch and presented it to a large audience.
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
            I worked with my classmate <TextLink href="https://github.com/TZT868">Maxim Vašíček</TextLink> and my friend <TextLink href="https://strizova.com/">Eva Střížová</TextLink>. <br></br>
            The competition involves more than programming; communicating with a client is also a big part of it. <br></br>
            The final was a three-day hackathon during which we built a new app from scratch and presented it to a large audience.
            That year's theme was AI, which made the challenge difficult because AI tools were still limited. <br></br>
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
            It consisted of 20 flags (15 online and 5 in person at the hackathon). Our team found 12, earning first place.
            Some interesting challenges included hexadecimal Sudoku and a sign on a Minecraft server that could be found using Nmap.
          </>,
          subtitle: "1st place",
          highlight: "gold"
        }
      ]} />
      <ProjectCard projects={[
        {
          image: "/img/pfp.png",
          imageAlt: "Portrait used on this CV website",
          title: "CV website",
          subtitle: "This website",
          description: <>
            A simple portfolio website. This was my first project in which I tried to make full use of AI.
          </>,
          technologies: [
            { name: "Next.js", variant: "default" },
            { name: "React", variant: "secondary" },
            { name: "TypeScript", variant: "outline" },
            { name: "Tailwind CSS", variant: "outline" },
            { name: "Vercel", variant: "outline" },
            { name: "AI-assisted coding", variant: "outline" }
          ],
          webUrl: "https://cv.mole.lol/",
          githubUrl: "https://github.com/Molenusaczech/cv"
        },
        {
          image: "/img/projects/gatecraftWiki.png",
          imageAlt: "Gatecraft wiki",
          title: "GateCraft wiki",
          subtitle: "Content and documentation writing",
          description: <>
            Documentation for the <TextLink href="https://gatecraft.eu/">GateCraft</TextLink> Minecraft server. I have written more than 100 pages, from guides to location descriptions. I worked with the developers and community to make the content as accurate as possible. It is currently available only in Czech, but we are working on an English translation.
          </>,
          technologies: [
            { name: "Writing", variant: "default" },
            { name: "Teamwork", variant: "secondary" },
            { name: "Documentation", variant: "outline" },
          ],
          webUrl: "https://gatecraft.eu/cz/wiki/hlavni-stranky/prehled"
        },
        {
          image: "/img/projects/cerveneKombo.png",
          imageAlt: "Portrait used on this CV website",
          title: "Červené kombo",
          subtitle: "Full-stack website with various Scratch Wars tools",
          description: <>
            This website allowed players to look up their cards' stats, which had not been possible because the API was undocumented. I later added the ability to scrape and replay matches from Scratch Wars Online. I originally built the interface with Material UI, then redesigned it using v0 by Vercel.
            <br></br>
            This website had more than 100 monthly users at its peak.
            <br></br>
            Unfortunately, most of the site no longer works because the APIs it depended on are no longer available.
          </>,
          technologies: [
            { name: "Next.js", variant: "default" },
            { name: "React", variant: "secondary" },
            { name: "TypeScript", variant: "outline" },
            { name: "Tailwind CSS", variant: "outline" },
            { name: "Vercel", variant: "outline" },
            { name: "API integration", variant: "outline" },
            { name: "Data analysis", variant: "outline" }
          ],
          webUrl: "https://ck.mole.lol/",
          githubUrl: "https://github.com/Molenusaczech/CerveneKombo"
        },
        {
          image: "/img/projects/gatecraftWiki.png",
          imageAlt: "Gatecraft website",
          title: "GateCraft",
          subtitle: "Minecraft server development",
          description: <>
            <TextLink href="https://gatecraft.eu/">GateCraft</TextLink> is one of the longest running Czech Minecraft servers. It has been running on the same map since 2011.
            More than 10,000 players have played on it since then.
            <br></br>
            Many custom plugins are written in Kotlin, and we also use off-the-shelf plugins with custom configurations where needed.
            <br></br>
            I mostly design and create dungeons, bosses, and items.
          </>,
          technologies: [
            { name: "Minecraft", variant: "default" },
            { name: "Kotlin", variant: "secondary" },
            { name: "MythicMobs", variant: "outline" },
            { name: "Linux", variant: "outline" },
            { name: "Game design", variant: "outline" },
          ],
          webUrl: "https://gatecraft.eu"
        },
        {
          image: "/img/projects/pano.jpg",
          imageAlt: "Panorama of Ráječko",
          title: "Panoview",
          subtitle: "Web 360° photo viewer",
          description: <>
            I had some 360° photos from my drone and couldn't find a place to host them, so I created this website and embedded them on the Ráječko website.
          </>,
          technologies: [
            { name: "Next.js", variant: "default" },
            { name: "React", variant: "secondary" },
            { name: "TypeScript", variant: "outline" },
            { name: "Tailwind CSS", variant: "outline" },
            { name: "three.js", variant: "outline" },
            { name: "Drone photography", variant: "outline" },
          ],
          webUrl: "https://pano.mole.lol/",
          githubUrl: "https://github.com/molenusaczech/panoview"
        },
        {
          image: "/img/projects/fiar.png",
          imageAlt: "Five-in-a-row game",
          title: "Five-in-a-row",
          subtitle: "Full-stack Gomoku (Five-in-a-Row) web game",
          description: <>
            My first major web project. It includes user registration, matches with the SWAP 2 opening, and statistics. <br></br>
            I made it because, at the time, I didn't know of any public Five-in-a-Row websites that supported the SWAP 2 rule.
          </>,
          technologies: [
            { name: "PHP", variant: "default" },
            { name: "JavaScript", variant: "secondary" },
            { name: "CSS", variant: "outline" },
            { name: "HTML", variant: "outline" }
          ],
          githubUrl: "https://github.com/Molenusaczech/five-in-a-row"
        },
        {
          image: "/img/projects/simpleModel.png",
          imageAlt: "SimpleModel interface",
          title: "SimpleModel",
          subtitle: "Web-based 3D model editor prototype",
          description: <>
            A simple web app for editing 3D models for 3D printing. The goal was to create a tool anyone could use to customize or slightly edit preset models.
          </>,
          technologies: [
            { name: "JavaScript", variant: "default" },
            { name: "Vite", variant: "secondary" },
            { name: "Css", variant: "outline" },
            { name: "HTML", variant: "outline" }
          ],
          githubUrl: "https://github.com/Molenusaczech/simpleModel",
          webUrl: "https://simple-model.vercel.app/"
        },
        {
          image: "/img/projects/molemoji.gif",
          imageAlt: "MoleMoji interface",
          title: "MoleMoji",
          subtitle: "Electron app to quickly copy images as stickers/emoji",
          description: <>
            A small prototype I made after my Discord Nitro subscription expired, when I wanted to keep sending stickers without paying.
          </>,
          technologies: [
            { name: "JavaScript", variant: "default" },
            { name: "Electron", variant: "secondary" },
            { name: "CSS", variant: "outline" },
            { name: "HTML", variant: "outline" }
          ],
          githubUrl: "https://github.com/Molenusaczech/MoleMoji"
        }
      ]} />
    </main>
  )
}
