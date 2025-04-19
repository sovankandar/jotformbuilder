"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type ThemeConfig, defaultTheme } from "./theme.config"

type ThemeContextType = {
  theme: ThemeConfig
  updateTheme: (newTheme: Partial<ThemeConfig>) => void
  updateColor: (key: string, value: string) => void
  updateFontFamily: (value: string) => void
  updateFontSize: (key: string, value: string) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  updateTheme: () => {},
  updateColor: () => {},
  updateFontFamily: () => {},
  updateFontSize: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme)

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("formBuilderTheme")
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme))
      } catch (e) {
        console.error("Failed to parse saved theme", e)
      }
    }
  }, [])

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("formBuilderTheme", JSON.stringify(theme))
  }, [theme])

  const updateTheme = (newTheme: Partial<ThemeConfig>) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      ...newTheme,
    }))
  }

  const updateColor = (key: string, value: string) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      colors: { ...prevTheme.colors, [key]: value },
    }))
  }

  const updateFontFamily = (value: string) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      typography: { ...prevTheme.typography, fontFamily: value },
    }))
  }

  const updateFontSize = (key: string, value: string) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      typography: {
        ...prevTheme.typography,
        fontSize: {
          ...prevTheme.typography.fontSize,
          [key]: value,
        },
      },
    }))
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, updateColor, updateFontFamily, updateFontSize }}>
      <div
        style={{
          fontFamily: theme.typography.fontFamily,
          color: theme.colors.text,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
