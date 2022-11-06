import { useState, useEffect } from "react"

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.theme === "dark"
  )

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const root = window.document.documentElement

    const prevTheme = isDarkMode ? "light" : "dark"
    root.classList.remove(prevTheme)

    const nextTheme = isDarkMode ? "dark" : "light"
    root.classList.add(nextTheme)

    localStorage.setItem("theme", nextTheme)

    isDarkMode
      ? (document.querySelector('meta[name="theme-color"]').content = "#374151")
      : (document.querySelector('meta[name="theme-color"]').content = "#ffffff")
  }, [isDarkMode])

  return [isDarkMode, toggleDarkMode]
}
