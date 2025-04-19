import type { CommonInputProps } from "./types"

export function renderRadio({ component, isPreview, value, getAlignmentClass, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <div className="space-y-2">
        {component.options?.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="radio"
              name={component.id}
              value={option}
              className="w-4 h-4 text-primary focus:ring-primary"
              disabled={!isPreview}
              required={component.required}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
      {component.required && isPreview && !value && (
        <p className="mt-1 text-sm text-gray-500">Please select an option</p>
      )}
    </div>
  )
}
