"use client"

import { useState } from "react"
import type { CommonInputProps } from "./types"

export function PhoneWithCode({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1")
  const [phoneNumber, setPhoneNumber] = useState("")

  // Country codes for phone with country code component
  const countryCodes = [
    { code: "+1", country: "US" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "IN" },
    { code: "+61", country: "AU" },
    { code: "+86", country: "CN" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+81", country: "JP" },
  ]

  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <div className="flex">
        <div className="w-24">
          <select
            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={selectedCountryCode}
            onChange={(e) => setSelectedCountryCode(e.target.value)}
            disabled={!isPreview}
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code} {country.country}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <input
            type="tel"
            className="w-full px-3 py-2 border border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={!isPreview}
            required={component.required}
          />
        </div>
      </div>
      {component.required && isPreview && !phoneNumber && (
        <p className="mt-1 text-sm text-red-500">Phone number is required</p>
      )}
    </div>
  )
}
