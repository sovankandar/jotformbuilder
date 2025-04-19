import type { CommonInputProps } from "./types"

export function renderSectionBreak({ component, getAlignmentClass, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getGridClass()} bg-gray-50 p-4 rounded-lg border border-gray-200`}>
      <h3 className={`text-lg font-medium mb-2 ${getAlignmentClass()}`}>{component.label || "Section Break"}</h3>
      {component.helpText && <p className="text-sm text-gray-500">{component.helpText}</p>}
    </div>
  )
}
