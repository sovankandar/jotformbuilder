"use client"

import { useState } from "react"
import type { CommonInputProps } from "./types"

export function renderPricingTier({ component, isPreview, getGridClass }: CommonInputProps) {
  const [selectedPricingTier, setSelectedPricingTier] = useState<string | null>(null)

  return (
    <div className={`${getGridClass()}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { id: "basic", name: "Basic", price: 9.99, features: ["Feature 1", "Feature 2", "Feature 3"] },
          {
            id: "pro",
            name: "Professional",
            price: 19.99,
            features: ["All Basic features", "Feature 4", "Feature 5", "Feature 6"],
          },
          {
            id: "enterprise",
            name: "Enterprise",
            price: 49.99,
            features: ["All Pro features", "Feature 7", "Feature 8", "Priority support"],
          },
        ].map((tier) => (
          <div
            key={tier.id}
            className={`border rounded-lg p-4 ${
              selectedPricingTier === tier.id
                ? "border-primary ring-2 ring-primary/30"
                : "border-gray-200 hover:border-primary/50"
            } transition-all`}
            onClick={() => isPreview && setSelectedPricingTier(tier.id)}
          >
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold">{tier.name}</h3>
              <div className="text-2xl font-bold mt-2">
                ${tier.price}
                <span className="text-sm font-normal text-gray-500">/mo</span>
              </div>
            </div>
            <ul className="space-y-2 mb-4">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button
                className={`w-full py-2 rounded-md ${
                  selectedPricingTier === tier.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                } transition-colors`}
                disabled={!isPreview}
              >
                {selectedPricingTier === tier.id ? "Selected" : "Select Plan"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {component.required && isPreview && !selectedPricingTier && (
        <p className="mt-2 text-sm text-red-500">Please select a pricing plan</p>
      )}
    </div>
  )
}
