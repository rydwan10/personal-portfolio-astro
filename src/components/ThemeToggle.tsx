import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">("light")

    React.useEffect(() => {
        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem("theme")
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        const initialTheme = savedTheme || systemTheme

        setTheme(initialTheme as "light" | "dark")
        document.documentElement.classList.toggle("dark", initialTheme === "dark")
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", newTheme)
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
} 