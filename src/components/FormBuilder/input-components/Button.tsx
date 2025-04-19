import type { CommonInputProps } from "./types"

export function renderButton({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <button
        type={(component.type === "submit" ? "submit" : "button") as "submit" | "button" | "reset"}
        className={`
          ${
            component.buttonSize === "small"
              ? "px-3 py-1.5 text-sm"
              : component.buttonSize === "large"
                ? "px-6 py-3 text-lg"
                : "px-4 py-2 text-base"
          }
          ${
            component.buttonStyle === "secondary"
              ? "bg-gray-500 hover:bg-gray-600 text-white"
              : component.buttonStyle === "outline"
                ? "border-2 border-primary text-primary hover:bg-primary/10"
                : component.buttonStyle === "link"
                  ? "text-primary hover:underline bg-transparent"
                  : "bg-primary hover:bg-primary/90 text-white"
          }
          rounded-md transition-all font-medium w-full
        `}
        disabled={!isPreview}
      >
        {component.label || (component.type === "submit" ? "Submit" : "Button")}
      </button>
    </div>
  )
}
