import type { CommonInputProps } from "./types"

export function renderFullName({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getAlignmentClass()} ${getGridClass()} grid grid-cols-2 gap-4`}>
      <div>
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required={component.required}
          disabled={!isPreview}
          value={component.firstName}
        />
        {component.required && isPreview && !component.firstName && (
          <p className="mt-1 text-sm text-red-500">First name is required</p>
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required={component.required}
          disabled={!isPreview}
          value={component.lastName}
        />
        {component.required && isPreview && !component.lastName && (
          <p className="mt-1 text-sm text-red-500">Last name is required</p>
        )}
      </div>
    </div>
  )
}
