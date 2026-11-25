import Link from "next/link";
import { ReactNode } from "react";

export default function TextLink(
    { href, children }: { href: string, children: ReactNode }
) {
    return (
        <Link href={href} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank">
            {children}
        </Link>
    )
}