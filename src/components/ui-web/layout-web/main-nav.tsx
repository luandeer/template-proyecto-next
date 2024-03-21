import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site-web"
import { ActiveLinks } from "./active-links"
import Image from "next/image"

interface MainNavProps {
    readonly items?: readonly NavItem[];
}

export function MainNav({ items }: MainNavProps) {
    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
                <Image src="/vercel.svg" className="hidden object-cover" alt="logo" width={90} height={90} priority />
                <span className="bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent text-xl font-extrabold">{siteConfig.nameLogo}</span>
            </Link>
            {items?.length ? (
                <nav className="hidden sm:flex items-center gap-3 text-muted-foreground">
                    {items?.map(
                        (item, index) =>
                            item.href && (
                                <ActiveLinks key={item.title} item={item} />
                            )
                    )}
                </nav>
            ) : null}
        </div>
    )
}