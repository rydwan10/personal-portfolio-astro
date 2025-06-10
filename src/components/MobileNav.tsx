import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { ModeToggle } from "./ModeToggla";
import { motion, AnimatePresence } from "framer-motion";

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
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-50 flex flex-col dark:bg-gradient-to-br dark:bg-gray-900 bg-background shadow-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center justify-between h-16 px-4 border-b py-4"
                        >
                            <span className="font-semibold text-lg">Muhammad Rydwan</span>
                            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                                <X className="h-6 w-6" />
                            </Button>
                        </motion.div>
                        <motion.nav
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col gap-2 px-6 py-8 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 bg-background shadow-2xl"
                        >
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * (index + 3) }}
                                    className="block px-3 py-3 text-lg font-medium  transition-colors hover:text-foreground rounded"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6"
                            >
                                <ModeToggle />
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 