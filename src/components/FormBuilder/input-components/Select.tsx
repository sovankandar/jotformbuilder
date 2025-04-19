"use client"

import type { CommonInputProps } from "./types"

export function renderSelect({
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
      <select
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? "border-red-500" : ""
        }`}
        disabled={!isPreview}
        required={component.required}
        value={value}
        onChange={handleInputChange}
      >
        <option value="">{component.placeholder || `Select ${component.label}`}</option>
        {component.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && isPreview && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
