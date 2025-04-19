import type { CommonInputProps } from "./types"

export function renderCreditCard({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getAlignmentClass()} ${getGridClass()} space-y-4`}>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required={component.required}
            disabled={!isPreview}
            value={component.cardNumber}
          />
          {component.required && isPreview && !component.cardNumber && (
            <p className="mt-1 text-sm text-red-500">Card number is required</p>
          )}
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Card Holder Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required={component.required}
            disabled={!isPreview}
            value={component.cardHolder}
          />
          {component.required && isPreview && !component.cardHolder && (
            <p className="mt-1 text-sm text-red-500">Card holder name is required</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="CVV"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required={component.required}
            disabled={!isPreview}
            value={component.cvv}
          />
          {component.required && isPreview && !component.cvv && (
            <p className="mt-1 text-sm text-red-500">CVV is required</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Bank Name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required={component.required}
            disabled={!isPreview}
            value={component.bankName}
          />
          {component.required && isPreview && !component.bankName && (
            <p className="mt-1 text-sm text-red-500">Bank name is required</p>
          )}
        </div>
      </div>
    </div>
  )
}
