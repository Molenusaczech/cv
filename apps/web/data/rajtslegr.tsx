import { ProfileData } from "@/types/profile";
import { Code2, Gamepad2, Video } from "lucide-react"

const rajtslegrData: ProfileData  = {
    firstName: "Daniel",
    lastName: "Rajtšlégr",
    motto: "Student @ FI MUNI, Ráječko board member",
    photo: "/img/photo.jpg",
    profilePicture: "/img/pfp.png",
    education: [
        {
            institution: "Faculty of Informatics, Masaryk University",
            program: "Programming and Development",
            period: "2025 - Ongoing",
            description: <>
                
            </>
        },
        {
            institution: "SPŠ Jedovnice",
            program: "Information Technology",
            period: "2021 - 2025",
            description: ""
        }
    ]
};

export default rajtslegrData;
