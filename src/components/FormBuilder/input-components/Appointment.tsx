import { Calendar, Clock } from "lucide-react"
import type { CommonInputProps } from "./types"

export function renderAppointment({ component, isPreview, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getGridClass()} border rounded-lg overflow-hidden`}>
      <div className="bg-gray-50 p-3 border-b">
        <h3 className="font-medium">{component.label || "Book Appointment"}</h3>
      </div>
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <div className="relative">
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary pl-10"
                disabled={!isPreview}
                required={component.required}
              />
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <div className="relative">
              <select
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary pl-10"
                disabled={!isPreview}
                required={component.required}
              >
                <option value="">Select time</option>
                {(component.timeSlots || ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM"]).map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        {component.required && isPreview && <p className="text-sm text-gray-500">Please select both date and time</p>}
      </div>
    </div>
  )
}
