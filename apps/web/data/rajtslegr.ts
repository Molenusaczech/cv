import { ProfileData } from "@/types/profile";
import { Code2, Gamepad2, Video } from "lucide-react"

const rajtslegrData: ProfileData  = {
    firstName: "Daniel",
    lastName: "Rajtšlégr",
    motto: "Student @ FI MUNI",
    photo: "/img/photo.jpg",
    profilePicture: "/img/pfp.png",
    skills: [
        {
            name: "Coding",
            icon: Code2,
            summary: "Building useful things with code.",
            description: "I enjoy turning ideas into maintainable web experiences and learning new tools along the way.",
            delimiters: ["Basics", "Projects", "Production"],
            progress: 2
        },
        {
            name: "Video making",
            icon: Video,
            summary: "Creating and editing visual stories.",
            description: "From recording to editing, I like shaping raw footage into something people want to watch.",
            delimiters: ["Learning", "Practicing", "Polished"],
            progress: 3
        },
        {
            name: "Gaming",
            icon: Gamepad2,
            summary: "Exploring games of all kinds.",
            description: "Games are a long-running source of inspiration, especially card games such as Magic: The Gathering.",
            delimiters: ["", "Regular", "Community"],
            progress: 3
        }
    ]
};

export default rajtslegrData;
