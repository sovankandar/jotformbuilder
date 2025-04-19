import { ShoppingCart } from "lucide-react"
import type { CommonInputProps } from "./types"

export function renderProductList({ component, isPreview, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getGridClass()} border rounded-lg overflow-hidden`}>
      <div className="bg-gray-50 p-3 border-b">
        <h3 className="font-medium">{component.label || "Product Selection"}</h3>
      </div>
      <div className="divide-y">
        {(
          component.products || [
            { id: "1", name: "Product 1", price: 19.99, image: "/placeholder.svg", quantity: 1 },
            { id: "2", name: "Product 2", price: 29.99, image: "/placeholder.svg", quantity: 1 },
          ]
        ).map((product) => (
          <div key={product.id} className="p-4 flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-md flex-shrink-0 overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                disabled={!isPreview}
              >
                -
              </button>
              <span className="w-8 text-center">{product.quantity}</span>
              <button
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                disabled={!isPreview}
              >
                +
              </button>
            </div>
            <button
              className="flex items-center gap-1 bg-primary text-white px-3 py-1.5 rounded-md text-sm"
              disabled={!isPreview}
            >
              <ShoppingCart size={16} />
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
