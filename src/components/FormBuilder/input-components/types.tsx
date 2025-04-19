import type React from "react"
import type { FormComponentType } from "@/types/types"

export interface CommonInputProps {
  component: FormComponentType
  isPreview: boolean
  value?: string
  error?: string | null
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  getAlignmentClass: () => string
  getGridClass: () => string
  getGridGapClass?: () => string
  [key: string]: any
}
