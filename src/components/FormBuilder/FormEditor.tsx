"use client"

import { motion } from "framer-motion"
import type { FormComponentType } from "@/types/types"
import { useState } from "react"
import FORM_TEMPLATES from "@/lib/template/TemplateData"
import ADVANCED_COMPONENTS from "@/lib/template/AdvancedData"
import BASIC_COMPONENTS from "@/lib/template/BasicData"

interface FormEditorProps {
  formData: FormComponentType[]
  setFormData: (data: FormComponentType[]) => void
}

export function FormEditor({ formData, setFormData }: FormEditorProps) {
  const [activeTab, setActiveTab] = useState<"basic" | "advanced" | "templates">("basic")

  const handleAddComponent = (component: any) => {
    const newComponent = {
      ...component,
      id: `${component.type}_${Date.now()}`,
      label: component.label || "New Component",
      gridColumns: "full",
    }

    if (component.type === "select" || component.type === "radio") {
      newComponent.options = ["Option 1", "Option 2", "Option 3"]
    }

    if (component.type === "productList") {
      newComponent.products = [
        { id: "1", name: "Product 1", price: 19.99, image: "/placeholder.svg?height=80&width=80", quantity: 1 },
        { id: "2", name: "Product 2", price: 29.99, image: "/placeholder.svg?height=80&width=80", quantity: 1 },
      ]
    }

    if (component.type === "appointment") {
      newComponent.timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM"]
    }

    if (component.type === "starRating") {
      newComponent.maxRating = 5
    }

    if (component.type === "feedbackTable") {
      newComponent.feedbackFields = [
        "How would you rate our service?",
        "How was the quality of our product?",
        "How likely are you to recommend us?",
      ]
    }

    setFormData([...formData, newComponent])
  }

  const handleAddTemplate = (template: any) => {
    const componentsWithUniqueIds = template.components.map((component: any) => ({
      ...component,
      id: `${component.type}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    }))

    setFormData(componentsWithUniqueIds)
  }

  const getComponentsList = () => {
    switch (activeTab) {
      case "basic":
        return BASIC_COMPONENTS
      case "advanced":
        return ADVANCED_COMPONENTS
      case "templates":
        return FORM_TEMPLATES
      default:
        return BASIC_COMPONENTS
    }
  }

  const componentsList = getComponentsList()

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Form Components</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("basic")}
            className={`flex-1 cursor-pointer py-2 px-4 rounded-md transition-all ${
              activeTab === "basic" ? "bg-blue-500 text-white shadow-md" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => setActiveTab("advanced")}
            className={`flex-1 cursor-pointer py-2 px-4 rounded-md transition-all ${
              activeTab === "advanced"
                ? "bg-cyan-600 text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            Advanced
          </button>
          <button
            onClick={() => setActiveTab("templates")}
            className={`flex-1 cursor-pointer py-2 px-4 rounded-md transition-all ${
              activeTab === "templates"
                ? "bg-purple-600 text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            Templates
          </button>
        </div>
      </div>

      <div className="p-4 overflow-y-auto flex-1">
        <div className="grid grid-cols-1 gap-3 content-start">
          {componentsList.map((component) => (
            <motion.button
              key={component.id}
              onClick={() => (activeTab === "templates" ? handleAddTemplate(component) : handleAddComponent(component))}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className={`p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-500 text-left flex items-center gap-3 transition-colors ${
                activeTab === "templates" ? "relative overflow-hidden" : ""
              }`}
            >
              <div
                className={`p-2 rounded-md ${
                  activeTab === "templates" ? "bg-purple-100 text-purple-600" : "bg-blue-100 text-blue-600"
                }`}
              >
                {component.icon && <component.icon size={18} />}
              </div>
              <span className="font-medium text-gray-700">{component.label}</span>

              {activeTab === "templates" && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                    {(component as any).components?.length || 0} fields
                  </span>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
