import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background text-primary mt-auto">
      <div className="container px-4 py-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="https://github.com/thesushilsharma"
          className="flex items-center gap-2 hover:text-foreground transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar className="w-24 h-8">
            <AvatarImage src="./zodiac.svg" alt="Logo" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
          <span className="font-medium">Sushil Sharma</span>
        </Link>

        <div className="flex items-center gap-2 text-sm mt-4 sm:mt-0">
          <span> &copy; {currentYear} Sushil Sharma</span>
          <Separator orientation="vertical" className="h-4" />
          <Link
            href="https://www.linkedin.com/in/thesushilsharma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <span>@thesushilsharma</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
