import React from 'react';
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
    return (
        <header className="border-b bg-background">
            <div className="container mx-auto flex items-center justify-center p-4 sm:p-6">
                <Link
                    href="https://github.com/thesushilsharma"
                    className="flex items-center hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Avatar className="h-10 w-40">
                        <AvatarImage src="./zodiac.svg" alt="Logo" />
                        <AvatarFallback>SS</AvatarFallback>
                    </Avatar>
                </Link>
            </div>
        </header>
    );
}