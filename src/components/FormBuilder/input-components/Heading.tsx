import type { CommonInputProps } from "./types"

export function renderHeading({ component, getAlignmentClass, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <h2 className="text-2xl font-bold text-gray-800">{component.label}</h2>
    </div>
  )
}
