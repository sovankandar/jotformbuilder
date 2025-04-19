"use client"

import type { CommonInputProps } from "./types.tsx"

export function renderTextInput({
  component,
  isPreview,
  value,
  error,
  handleInputChange,
  getAlignmentClass,
  getGridClass,
}: CommonInputProps) {
  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <input
        type={component.type}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? "border-red-500" : ""
        }`}
        placeholder={component.placeholder || `Enter ${component.label}`}
        required={component.required}
        disabled={!isPreview}
        value={value}
        onChange={handleInputChange}
        min={component.type === "number" ? component.min : undefined}
        max={component.type === "number" ? component.max : undefined}
        pattern={component.pattern}
      />
      {error && isPreview && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
