"use client"

import type { FormComponentType } from "@/types/types"
import { useState } from "react"
import { motion } from "framer-motion"
import { BasicProperties } from "./propertiesPanel/BasicProperties"
import { AdvancedProperties } from "./propertiesPanel/AdvancedProperties"
import { useTheme } from "@/lib/theme/themeContext"

interface PropertiesPanelProps {
  component: FormComponentType
  onUpdate: (updated: FormComponentType) => void
}

export function PropertiesPanel({ component, onUpdate }: PropertiesPanelProps) {
  const [activeTab, setActiveTab] = useState<"basic" | "advanced">("basic")
  const { theme } = useTheme()

  return (
    <div className="p-4 space-y-6">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab("basic")}
          className={`flex-1 cursor-pointer py-2 px-4 rounded-md transition-all ${
            activeTab === "basic" ? "text-white shadow-sm" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          style={{
            backgroundColor: activeTab === "basic" ? theme.colors.primary : "",
            borderRadius: "0.375rem",
          }}
        >
          Basic
        </button>
        <button
          onClick={() => setActiveTab("advanced")}
          className={`flex-1 cursor-pointer py-2 px-4 rounded-md transition-all ${
            activeTab === "advanced" ? "text-white shadow-sm" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          style={{
            backgroundColor: activeTab === "advanced" ? theme.colors.primary : "",
            borderRadius: "0.375rem",
          }}
        >
          Advanced
        </button>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === "basic" ? (
          <BasicProperties component={component} onUpdate={onUpdate} />
        ) : (
          <AdvancedProperties component={component} onUpdate={onUpdate} />
        )}
      </motion.div>
    </div>
  )
}
