"use client"

import type { CommonInputProps } from "./types"

export function renderTextarea({
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
      <textarea
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? "border-red-500" : ""
        }`}
        placeholder={component.placeholder || `Enter ${component.label}`}
        required={component.required}
        disabled={!isPreview}
        rows={component.rows || 4}
        value={value}
        onChange={handleInputChange}
      />
      {error && isPreview && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
