"use client"

import type React from "react"
import type { FormComponentType } from "@/types/types"
import { useTheme } from "@/lib/theme/themeContext"

interface AdvancedPropertiesProps {
  component: FormComponentType
  onUpdate: (updated: FormComponentType) => void
}

export const AdvancedProperties: React.FC<AdvancedPropertiesProps> = ({ component, onUpdate }) => {
  const { theme } = useTheme()

  const handleChange = (field: keyof FormComponentType, value: string | number | { pattern?: string; message?: string }) => {
    onUpdate({
      ...component,
      [field]: value,
    })
  }

  return (
    <div className="space-y-4">
      {/* Grid Layout Controls */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Grid Layout</label>
        <select
          value={component.gridColumns || "full"}
          onChange={(e) => handleChange("gridColumns", e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
        >
          <option value="full">Full Width</option>
          <option value="1">1/4 Width</option>
          <option value="2">2/4 Width</option>
          <option value="3">3/4 Width</option>
          <option value="4">Full Width (4/4)</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Grid Gap</label>
        <select
          value={component.gridGap || "medium"}
          onChange={(e) => handleChange("gridGap", e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Alignment</label>
        <div className="flex gap-2">
          <button
            onClick={() => handleChange("alignment", "left")}
            className={`flex-1 p-2 border cursor-pointer rounded-md transition-colors ${
              component.alignment === "left" ? "bg-gray-600 text-white" : "hover:bg-gray-50"
            }`}
            style={{
              borderColor: theme.colors.border,
              borderRadius: "0.375rem",
              backgroundColor: component.alignment === "left" ? theme.colors.primary : "",
            }}
          >
            Left
          </button>
          <button
            onClick={() => handleChange("alignment", "center")}
            className={`flex-1 p-2 border rounded-md cursor-pointer transition-colors ${
              component.alignment === "center" ? "bg-gray-600 text-white" : "hover:bg-gray-50"
            }`}
            style={{
              borderColor: theme.colors.border,
              borderRadius: "0.375rem",
              backgroundColor: component.alignment === "center" ? theme.colors.primary : "",
            }}
          >
            Center
          </button>
          <button
            onClick={() => handleChange("alignment", "right")}
            className={`flex-1 p-2 border rounded-md cursor-pointer transition-colors ${
              component.alignment === "right" ? "bg-gray-600 text-white" : "hover:bg-gray-50"
            }`}
            style={{
              borderColor: theme.colors.border,
              borderRadius: "0.375rem",
              backgroundColor: component.alignment === "right" ? theme.colors.primary : "",
            }}
          >
            Right
          </button>
        </div>
      </div>

      {component.type === "textarea" && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Rows</label>
          <input
            type="number"
            value={component.rows || 4}
            onChange={(e) => handleChange("rows", Number.parseInt(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            min={1}
            max={20}
          />
        </div>
      )}

      {component.type === "number" && (
        <>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Min Value</label>
            <input
              type="number"
              value={component.min || ""}
              onChange={(e) => handleChange("min", e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Max Value</label>
            <input
              type="number"
              value={component.max || ""}
              onChange={(e) => handleChange("max", e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            />
          </div>
        </>
      )}

      {component.type === "file" && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Accepted File Types</label>
          <input
            type="text"
            value={component.accept || ""}
            onChange={(e) => handleChange("accept", e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            placeholder=".pdf,.doc,.docx"
          />
        </div>
      )}

      {component.type === "tel" && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Pattern</label>
          <input
            type="text"
            value={component.pattern || ""}
            onChange={(e) => handleChange("pattern", e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            placeholder="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>
      )}

      {["text", "email", "password", "tel"].includes(component.type || "") && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Validation Pattern</label>
          <input
            type="text"
            value={component.validation?.pattern || ""}
            onChange={(e) =>
              handleChange("validation", {
                ...component.validation,
                pattern: e.target.value,
              })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            placeholder="Regular expression"
          />
        </div>
      )}

      {["text", "email", "password", "tel", "textarea"].includes(component.type || "") && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Error Message</label>
          <input
            type="text"
            value={component.validation?.message || ""}
            onChange={(e) =>
              handleChange("validation", {
                ...component.validation,
                message: e.target.value,
              })
            }
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ borderColor: theme.colors.border, borderRadius: "0.375rem" }}
            placeholder="Custom error message"
          />
        </div>
      )}
    </div>
  )
}
