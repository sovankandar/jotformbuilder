import type { CommonInputProps } from "./types"

export function renderAddress({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getAlignmentClass()} ${getGridClass()} space-y-4`}>
      <div className="col-span-full">
        <input
          type="text"
          placeholder="Street Address"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required={component.required}
          disabled={!isPreview}
          value={component.street}
        />
        {component.required && isPreview && !component.street && (
          <p className="mt-1 text-sm text-red-500">Street address is required</p>
        )}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <input
            type="text"
            placeholder="City"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required={component.required}
            disabled={!isPreview}
            value={component.city}
          />
          {component.required && isPreview && !component.city && (
            <p className="mt-1 text-sm text-red-500">City is required</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="State"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required={component.required}
            disabled={!isPreview}
            value={component.state}
          />
          {component.required && isPreview && !component.state && (
            <p className="mt-1 text-sm text-red-500">State is required</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="PIN Code"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required={component.required}
            disabled={!isPreview}
            value={component.pinCode}
          />
          {component.required && isPreview && !component.pinCode && (
            <p className="mt-1 text-sm text-red-500">PIN code is required</p>
          )}
        </div>
      </div>
    </div>
  )
}
