"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Palette, Type, Layout, Save } from "lucide-react"
import { useTheme } from "@/lib/theme/themeContext"
import { useToast } from "@/hooks/use-toast"

// Color Panel Component
const ColorPanel = () => {
  const { theme, updateColor } = useTheme()

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(theme.colors).map(([key, value]) => (
          <div key={key} className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium capitalize text-gray-700">{key}</label>
              <div className="w-6 h-6 rounded-full border border-gray-300" style={{ backgroundColor: value }} />
            </div>
            <input
              type="color"
              value={value}
              onChange={(e) => updateColor(key, e.target.value)}
              className="w-full h-8 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// Typography Panel Component
const TypographyPanel = () => {
  const { theme, updateFontFamily, updateFontSize } = useTheme()

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Font Family</label>
        <select
          value={theme.typography.fontFamily}
          onChange={(e) => updateFontFamily(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="Inter, sans-serif">Inter</option>
          <option value="Arial, sans-serif">Arial</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Roboto, sans-serif">Roboto</option>
          <option value="'Segoe UI', sans-serif">Segoe UI</option>
          <option value="'Open Sans', sans-serif">Open Sans</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Font Sizes</label>
        {Object.entries(theme.typography.fontSize).map(([key, value]) => (
          <div key={key} className="flex items-center space-x-2 mb-2">
            <label className="w-12 text-sm capitalize">{key}:</label>
            <input
              type="text"
              value={value}
              onChange={(e) => updateFontSize(key, e.target.value)}
              className="flex-1 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// Layout Panel Component
const LayoutPanel = () => {
  const { theme, updateTheme } = useTheme()

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Form Width</label>
        <select
          value={theme.layout.formWidth}
          onChange={(e) => updateTheme({ layout: { ...theme.layout, formWidth: e.target.value as any } })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="narrow">Narrow</option>
          <option value="medium">Medium</option>
          <option value="wide">Wide</option>
          <option value="full">Full Width</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Spacing</label>
        <select
          value={theme.layout.spacing}
          onChange={(e) => updateTheme({ layout: { ...theme.layout, spacing: e.target.value as any } })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="compact">Compact</option>
          <option value="normal">Normal</option>
          <option value="relaxed">Relaxed</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Border Radius</label>
        <select
          value={theme.layout.borderRadius}
          onChange={(e) => updateTheme({ layout: { ...theme.layout, borderRadius: e.target.value as any } })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="none">None</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="full">Full</option>
        </select>
      </div>
    </div>
  )
}

export function ThemePanel() {
  const [activeTab, setActiveTab] = useState<"colors" | "typography" | "layout">("colors")
  const { theme } = useTheme()
  const { toast } = useToast()  // Changed this line

  const handleSaveTheme = () => {
    // Theme is already being saved in localStorage via the context
    toast({
      title: "Theme saved",
      description: "Your theme settings have been saved successfully.",
    })
  }

  return (
    <div className="p-4 space-y-6">
      <div className="flex border rounded-md overflow-hidden">
        <button
          onClick={() => setActiveTab("colors")}
          className={`flex-1 py-2 px-3 flex items-center justify-center gap-1 ${
            activeTab === "colors" ? "bg-gray-600 text-white" : "bg-white hover:bg-gray-50 text-gray-700"
          }`}
        >
          <Palette size={16} />
          <span className="text-sm">Colors</span>
        </button>
        <button
          onClick={() => setActiveTab("typography")}
          className={`flex-1 py-2 px-3 flex items-center justify-center gap-1 ${
            activeTab === "typography" ? "bg-gray-600 text-white" : "bg-white hover:bg-gray-50 text-gray-700"
          }`}
        >
          <Type size={16} />
          <span className="text-sm">Type</span>
        </button>
        <button
          onClick={() => setActiveTab("layout")}
          className={`flex-1 py-2 px-3 flex items-center justify-center gap-1 ${
            activeTab === "layout" ? "bg-gray-600 text-white" : "bg-white hover:bg-gray-50 text-gray-700"
          }`}
        >
          <Layout size={16} />
          <span className="text-sm">Layout</span>
        </button>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === "colors" && <ColorPanel />}
        {activeTab === "typography" && <TypographyPanel />}
        {activeTab === "layout" && <LayoutPanel />}
      </motion.div>

      <div className="pt-4 border-t mt-6">
        <button
          onClick={handleSaveTheme}
          className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          style={{ backgroundColor: theme.colors.primary }}
        >
          <Save size={16} />
          Save Theme
        </button>
      </div>
    </div>
  )
}
