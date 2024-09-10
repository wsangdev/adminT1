'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Switcher() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}> Light Mode </button>
      <button onClick={() => setTheme('dark')}> Dark Mode </button>
    </div>
  )

}
