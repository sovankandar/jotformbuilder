"use client"

import { Star } from "lucide-react"
import { useState } from "react"
import type { CommonInputProps } from "./types"

export function StarRating({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  const [rating, setRating] = useState(0)

  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: component.maxRating || 5 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => isPreview && setRating(i + 1)}
              className="focus:outline-none"
              disabled={!isPreview}
            >
              <Star className={`h-8 w-8 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
            </button>
          ))}
        </div>
        <span className="text-sm font-medium">
          {rating > 0 ? `Your rating: ${rating}/${component.maxRating || 5}` : "Rate your experience"}
        </span>
        {component.required && isPreview && rating === 0 && (
          <p className="text-sm text-red-500">Please provide a rating</p>
        )}
      </div>
    </div>
  )
}
