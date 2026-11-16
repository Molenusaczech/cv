import Profile from "@/components/cv/profile"
import SkillsCard from "@/components/cv/skillsCard"
import TextCard from "@/components/cv/textCard"
import rajtslegrData from "@/data/rajtslegr"

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center p-6 gap-2">
      <Profile profile={rajtslegrData} />
      <TextCard
        title="About me"
        >
          I'm a 20 year old guy, that loves to make stuff. Coding, organizing tournaments, videomaking etc.
          My passion is gaming of all kinds. I especially like card games like Magic the Gathering.
        </TextCard>
      <SkillsCard skills={rajtslegrData.skills} />
    </main>
  )
}
