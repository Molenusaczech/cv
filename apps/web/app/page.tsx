import Profile from "@/components/cv/profile"
import rajtslegrData from "@/data/rajtslegr"

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center p-6 gap-2">
      <Profile profile={rajtslegrData} />
      <Profile profile={rajtslegrData} />
    </main>
  )
}
