import type { CommonInputProps } from "./types"

export function renderDivider({ getGridClass }: CommonInputProps) {
  return (
    <div className={getGridClass()}>
      <hr className="my-4 border-gray-200" />
    </div>
  )
}
