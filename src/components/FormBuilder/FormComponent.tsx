"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { FormComponentType } from "@/types/types"
import { Settings, Trash2 } from "lucide-react"
import { useState, useEffect } from "react"
import { useAppDispatch } from "@/lib/store/hooks"
import { setSelectedComponent, deleteComponent } from "@/lib/store/formSlice"
import { getComponentRenderer } from "./component-registry"
import { useTheme } from "@/lib/theme/themeContext"

interface FormComponentProps {
  component: FormComponentType
  isPreview: boolean
  isSelected: boolean
  onClick: () => void
  onDelete?: () => void
  onSettingsClick?: () => void
}

// Update ComponentRendererProps interface
interface ComponentRendererProps {
  component: FormComponentType
  isPreview: boolean
  value: string
  error: string | null
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  getAlignmentClass: () => string
  getGridClass: () => string
  handleBlur?: () => void
  touched?: boolean
}

export function FormComponent({
  component,
  isPreview,
  isSelected,
  onClick,
  onDelete,
  onSettingsClick,
}: FormComponentProps) {
  const [value, setValue] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState(false)
  const dispatch = useAppDispatch()
  const { theme } = useTheme()

  // Replace direct state management with Redux actions
  const handleDelete = () => {
    dispatch(deleteComponent(component.id))
    onDelete?.()
  }

  const handleSettingsClick = () => {
    dispatch(setSelectedComponent(component))
    onSettingsClick?.()
  }

  // Helper function for alignment
  const getAlignmentClass = () => {
    switch (component.alignment) {
      case "left":
        return "text-left"
      case "center":
        return "text-center"
      case "right":
        return "text-right"
      default:
        // Default alignment based on component type
        return component.type === "button" || component.type === "submit" ? "text-center" : "text-left"
    }
  }

  // Helper function for grid columns
  const getGridClass = () => {
    switch (component.gridColumns) {
      case "1":
        return "col-span-1"
      case "2":
        return "col-span-2"
      case "3":
        return "col-span-3"
      case "4":
        return "col-span-4"
      case "full":
        return "col-span-full"
      default:
        return "col-span-full"
    }
  }

  const getGridGapClass = () => {
    switch (component.gridGap) {
      case "small":
        return "gap-2"
      case "large":
        return "gap-6"
      default:
        return "gap-4"
    }
  }

  const validateInput = (value: string) => {
    // Required field validation
    if (component.required && !value) {
      return `${component.label} is required`
    }

    // Pattern validation
    if (component.validation?.pattern && value) {
      const regex = new RegExp(component.validation.pattern)
      if (!regex.test(value)) {
        return component.validation.message || "Invalid input"
      }
    }

    // Email validation
    if (component.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address"
      }
    }

    // Number validation
    if (component.type === "number" && value) {
      const num = Number.parseFloat(value)
      if (isNaN(num)) {
        return "Please enter a valid number"
      }
      if (component.min !== undefined && num < Number.parseFloat(component.min)) {
        return `Value must be at least ${component.min}`
      }
      if (component.max !== undefined && num > Number.parseFloat(component.max)) {
        return `Value must be at most ${component.max}`
      }
    }

    return null
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    setTouched(true)

    const validationError = validateInput(newValue)
    setError(validationError)
  }

  const handleBlur = () => {
    setTouched(true)
    const validationError = validateInput(value)
    setError(validationError)
  }

  // Validate on component mount if in preview mode and required
  useEffect(() => {
    if (isPreview && component.required) {
      const validationError = validateInput(value)
      setError(validationError)
    }
  }, [isPreview, component.required])

  const renderInput = () => {
    const renderer = getComponentRenderer(component.type)
    return renderer({
      component,
      isPreview,
      value,
      error,
      handleInputChange,
      getAlignmentClass,
      getGridClass,
      handleBlur: isPreview ? handleBlur : undefined,
      touched: isPreview ? touched : false,
    })
  }

  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative p-4 bg-white rounded-lg transition-all ${getGridClass()} ${
        isSelected && !isPreview
          ? "ring-2 shadow-md"
          : isPreview
            ? ""
            : "hover:shadow-md hover:border-primary/30 border border-transparent"
      }`}
      style={{
        borderRadius: "0.5rem",
        boxShadow: isSelected && !isPreview ? "0 4px 6px rgba(0,0,0,0.1)" : "",
        borderColor: isSelected && !isPreview ? theme.colors.primary : "",
        // Remove ringColor from style object
      }}
      whileHover={!isPreview ? { scale: 1.005 } : {}}
    >
      {isSelected && !isPreview && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-3 right-2 flex gap-2 z-10"
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              onSettingsClick?.()
            }}
            className="text-white p-1.5 rounded-md hover:bg-primary/90 transition-colors shadow-md"
            style={{ backgroundColor: theme.colors.primary }}
            title="Edit properties"
          >
            <Settings size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onDelete?.()
            }}
            className="bg-red-500 text-white p-1.5 rounded-md hover:bg-red-600 transition-colors shadow-md"
            title="Delete component"
          >
            <Trash2 size={16} />
          </button>
        </motion.div>
      )}

      {component.type !== "heading" &&
        component.type !== "divider" &&
        component.type !== "sectionBreak" &&
        component.type !== "button" &&
        component.type !== "submit" && (
          <label className="block mb-2 font-medium text-gray-700">
            {component.label}
            {component.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

      {renderInput()}

      {component.helpText && <p className="mt-1 text-sm text-gray-500">{component.helpText}</p>}

      {isPreview && error && touched && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </motion.div>
  )
}
