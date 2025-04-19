import { FormComponentType } from "./types"
import { LucideIcon } from "lucide-react"

export interface BaseComponent {
  id: string
  type: string
  label: string
  icon?: LucideIcon
  gridColumns?: string
}

export interface FormTemplate {
  id: string
  label: string
  icon?: LucideIcon
  components: FormComponentType[]
}

export interface ProductItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export interface ComponentWithOptions extends BaseComponent {
  options?: string[]
  products?: ProductItem[]
  timeSlots?: string[]
  maxRating?: number
  feedbackFields?: string[]
}