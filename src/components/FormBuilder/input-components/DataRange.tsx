"use client"

import { CalendarRange } from "lucide-react"
import { useState } from "react"
import type { CommonInputProps } from "./types"

export function DateRange({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <div className="relative">
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary pl-10"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              disabled={!isPreview}
              required={component.required}
            />
            <CalendarRange className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Date</label>
          <div className="relative">
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary pl-10"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              disabled={!isPreview}
              required={component.required}
              min={startDate}
            />
            <CalendarRange className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      {component.required && isPreview && (!startDate || !endDate) && (
        <p className="mt-1 text-sm text-red-500">Both start and end dates are required</p>
      )}
    </div>
  )
}
