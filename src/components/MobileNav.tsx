import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { ModeToggle } from "./ModeToggla";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/#education", label: "Education" },
    { href: "/#contact", label: "Contact" },
];

export function MobileNav() {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open menu">
                <Menu className="h-6 w-6" />
            </Button>
            {open && (
                <div className="fixed inset-0 z-50 flex flex-col bg-background shadow-2xl">
                    <div className="flex items-center justify-between h-16 px-4 border-b py-4">
                        <span className="font-bold text-lg">Muhammad Rydwan</span>
                        <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                            <X className="h-6 w-6" />
                        </Button>
                    </div>
                    <nav className="flex flex-col gap-2 px-6 py-8 bg-background shadow-2xl">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-3 text-lg font-medium text-muted-foreground transition-colors hover:text-foreground rounded"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="mt-6">
                            <ModeToggle />
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
} 