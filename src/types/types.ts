export interface FormComponentType {
  id: string
  type: string
  label?: string
  placeholder?: string
  required?: boolean
  helpText?: string
  options?: string[]
  checkboxLabel?: string
  buttonType?: string
  buttonStyle?: string
  buttonSize?: string
  rows?: number
  min?: string
  max?: string
  accept?: string
  pattern?: string
  alignment?: "left" | "center" | "right"
  gridColumns?: "1" | "2" | "3" | "4" | "full"
  gridGap?: "small" | "medium" | "large"
  validation?: {
    pattern?: string
    message?: string
  }
  firstName?: string
  lastName?: string
  street?: string
  city?: string
  state?: string
  pinCode?: string
  cardNumber?: string
  cardHolder?: string
  cvv?: string
  bankName?: string
  products?: {
    id: string
    name: string
    price: number
    image: string
    quantity: number
  }[]
  timeSlots?: string[]
  dateRange?: boolean
  maxRating?: number
  feedbackFields?: string[]
  signatureData?: string
  socialLinks?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
    website?: string
  }
  pricingTiers?: {
    id: string
    name: string
    price: number
    features: string[]
  }[]
}
