"use client"

import type React from "react"
import { useState } from "react"
import type { FormComponentType } from "@/types/types"
import { useTheme } from "@/lib/theme/themeContext"

interface BasicPropertiesProps {
  component: FormComponentType
  onUpdate: (updated: FormComponentType) => void
}

export const BasicProperties: React.FC<BasicPropertiesProps> = ({ component, onUpdate }) => {
  const [newOption, setNewOption] = useState("")
  const { theme } = useTheme()

  const handleChange = (field: string, value: any) => {
    onUpdate({
      ...component,
      [field]: value,
    })
  }

  const handleAddOption = () => {
    if (!newOption.trim()) return

    const currentOptions = component.options || []
    onUpdate({
      ...component,
      options: [...currentOptions, newOption.trim()],
    })
    setNewOption("")
  }

  const handleRemoveOption = (index: number) => {
    const newOptions = [...(component.options || [])]
    newOptions.splice(index, 1)
    onUpdate({
      ...component,
      options: newOptions,
    })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Label</label>
        <input
          type="text"
          value={component.label || ""}
          onChange={(e) => handleChange("label", e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
        />
      </div>

      {component.type !== "heading" && component.type !== "divider" && component.type !== "sectionBreak" && (
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="required"
            checked={component.required || false}
            onChange={(e) => handleChange("required", e.target.checked)}
            className="w-4 h-4 text-primary focus:ring-primary rounded"
            style={{ color: theme.colors.primary }}
          />
          <label htmlFor="required" className="text-sm font-medium text-gray-700">
            Required
          </label>
        </div>
      )}

      {(component.type === "button" || component.type === "submit") && (
        <>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Button Type</label>
            <select
              value={component.buttonType || "button"}
              onChange={(e) => handleChange("buttonType", e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            >
              <option value="button">Regular Button</option>
              <option value="submit">Submit</option>
              <option value="reset">Reset</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Style</label>
            <select
              value={component.buttonStyle || "primary"}
              onChange={(e) => handleChange("buttonStyle", e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="outline">Outline</option>
              <option value="link">Link</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <select
              value={component.buttonSize || "medium"}
              onChange={(e) => handleChange("buttonSize", e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </>
      )}

      {["text", "textarea", "email", "password", "tel", "number"].includes(component.type || "") && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Placeholder</label>
          <input
            type="text"
            value={component.placeholder || ""}
            onChange={(e) => handleChange("placeholder", e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
          />
        </div>
      )}

      {["text", "textarea", "heading", "sectionBreak"].includes(component.type || "") && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Help Text</label>
          <input
            type="text"
            value={component.helpText || ""}
            onChange={(e) => handleChange("helpText", e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
          />
        </div>
      )}

      {(component.type === "select" || component.type === "radio") && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Options</label>

          <div className="space-y-2 mb-2">
            {(component.options || []).map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...(component.options || [])]
                    newOptions[index] = e.target.value
                    handleChange("options", newOptions)
                  }}
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
                />
                <button
                  onClick={() => handleRemoveOption(index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                  aria-label="Remove option"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              placeholder="Add new option"
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  handleAddOption()
                }
              }}
            />
            <button
              onClick={handleAddOption}
              className="p-2 text-white rounded-md hover:bg-primary/90"
              style={{ backgroundColor: theme.colors.primary, borderRadius: "0.375rem" }}
              aria-label="Add option"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {component.type === "checkbox" && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Checkbox Label</label>
          <input
            type="text"
            value={component.checkboxLabel || ""}
            onChange={(e) => handleChange("checkboxLabel", e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
          />
        </div>
      )}

      {component.type === "starRating" && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Max Rating</label>
          <input
            type="number"
            value={component.maxRating || 5}
            onChange={(e) => handleChange("maxRating", Number.parseInt(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            min={1}
            max={10}
          />
        </div>
      )}

      {component.type === "feedbackTable" && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Feedback Questions</label>

          <div className="space-y-2 mb-2">
            {(component.feedbackFields || []).map((field, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="text"
                  value={field}
                  onChange={(e) => {
                    const newFields = [...(component.feedbackFields || [])]
                    newFields[index] = e.target.value
                    handleChange("feedbackFields", newFields)
                  }}
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
                />
                <button
                  onClick={() => {
                    const newFields = [...(component.feedbackFields || [])]
                    newFields.splice(index, 1)
                    handleChange("feedbackFields", newFields)
                  }}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                  aria-label="Remove question"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              const newFields = [...(component.feedbackFields || []), "New Question"]
              handleChange("feedbackFields", newFields)
            }}
            className="w-full p-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium flex items-center justify-center gap-1"
            style={{ borderRadius: "0.375rem" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Add Question
          </button>
        </div>
      )}
    </div>
  )
}
