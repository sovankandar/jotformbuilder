"use client"

import { useState } from "react"
import type { CommonInputProps } from "./types"

export function renderPriceRange({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  const [priceRange, setPriceRange] = useState([0, 100])

  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">${priceRange[0]}</span>
          <span className="font-medium">${priceRange[1]}</span>
        </div>
        <div className="relative pt-1">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            disabled={!isPreview}
          />
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
            disabled={!isPreview}
          />
        </div>
        <div className="flex justify-between space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Min Price</label>
            <input
              type="number"
              min="0"
              max={priceRange[1]}
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={!isPreview}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Max Price</label>
            <input
              type="number"
              min={priceRange[0]}
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={!isPreview}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
