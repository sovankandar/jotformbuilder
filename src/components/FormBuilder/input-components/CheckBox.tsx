import type { CommonInputProps } from "./types"

export function renderCheckbox({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded"
          disabled={!isPreview}
          required={component.required}
        />
        <span className="ml-2">{component.checkboxLabel || component.label}</span>
      </div>
      {component.required && isPreview && <p className="mt-1 text-sm text-gray-500">This field is required</p>}
    </div>
  )
}
