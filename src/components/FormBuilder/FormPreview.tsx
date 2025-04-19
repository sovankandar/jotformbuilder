"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import type { FormComponentType } from "@/types/types"
import { FormComponent } from "./FormComponent"
import { Smartphone, Tablet, Monitor } from "lucide-react"
import { useTheme } from "@/lib/theme/themeContext"
import { getThemeValue } from "@/lib/theme/theme.config"

interface FormPreviewProps {
  formData: FormComponentType[]
  isPreviewMode: boolean
  onSelectComponent: (component: FormComponentType | null) => void
  onOpenSettings: (component: FormComponentType) => void
  selectedComponent: FormComponentType | null
  onDeleteComponent: (id: string) => void
  onSubmit?: (e: React.FormEvent) => void
}

export function FormPreview({
  formData,
  isPreviewMode,
  onSelectComponent,
  onOpenSettings,
  selectedComponent,
  onDeleteComponent,
  onSubmit,
}: FormPreviewProps) {
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const { theme } = useTheme()
  const themeValues = getThemeValue(theme)

  const getViewportClass = () => {
    switch (viewportMode) {
      case "mobile":
        return "max-w-[375px]"
      case "tablet":
        return "max-w-[768px]"
      default:
        return "max-w-full"
    }
  }

  if (formData.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-4">
        <div className="p-6 rounded-full mb-4" style={{ backgroundColor: `${theme.colors.primary}20` }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: theme.colors.primary }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          {isPreviewMode ? "Your form is empty" : "Start building your form"}
        </h2>
        <p className="text-gray-500 max-w-md">
          {isPreviewMode
            ? "Switch to edit mode and add components to your form."
            : "Click on components from the left sidebar to add them to your form."}
        </p>
      </div>
    )
  }

  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          {isPreviewMode ? "Form Preview" : "Form Layout"}
          {!isPreviewMode && (
            <span className="ml-2 text-sm font-normal text-gray-500">(Click on a component to edit)</span>
          )}
        </h2>

        {isPreviewMode && (
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewportMode("mobile")}
              className={`p-2 rounded-md ${
                viewportMode === "mobile" ? "bg-white shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
              style={{ color: viewportMode === "mobile" ? theme.colors.primary : "" }}
              title="Mobile view"
            >
              <Smartphone size={18} />
            </button>
            <button
              onClick={() => setViewportMode("tablet")}
              className={`p-2 rounded-md ${
                viewportMode === "tablet" ? "bg-white shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
              style={{ color: viewportMode === "tablet" ? theme.colors.primary : "" }}
              title="Tablet view"
            >
              <Tablet size={18} />
            </button>
            <button
              onClick={() => setViewportMode("desktop")}
              className={`p-2 rounded-md ${
                viewportMode === "desktop" ? "bg-white shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
              style={{ color: viewportMode === "desktop" ? theme.colors.primary : "" }}
              title="Desktop view"
            >
              <Monitor size={18} />
            </button>
          </div>
        )}
      </div>

      <motion.div
        className={`mx-auto transition-all ${isPreviewMode ? getViewportClass() : "max-w-full"}`}
        layout
        style={{
          maxWidth: isPreviewMode
            ? viewportMode === "desktop"
              ? themeValues.formWidth
              : undefined
            : themeValues.formWidth,
        }}
      >
        <motion.form
          className="space-y-5"
          layout
          onSubmit={(e) => {
            if (isPreviewMode && onSubmit) {
              onSubmit(e)
            } else {
              e.preventDefault()
            }
          }}
          style={{ gap: themeValues.spacing }}
        >
          <AnimatePresence initial={false}>
            <div className="grid grid-cols-4 gap-4" style={{ gap: themeValues.spacing }}>
              {formData.map((component: FormComponentType) => (
                <FormComponent
                  key={component.id}
                  component={component}
                  isPreview={isPreviewMode}
                  isSelected={selectedComponent?.id === component.id}
                  onClick={() => !isPreviewMode && onSelectComponent(component)}
                  onSettingsClick={() => onOpenSettings(component)}
                  onDelete={() => onDeleteComponent(component.id)}
                />
              ))}
            </div>
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </div>
  )
}
