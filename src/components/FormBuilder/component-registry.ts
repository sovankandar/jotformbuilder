import React from "react"
import type { FormComponentType } from "@/types/types"
import type { ReactElement } from "react"

type ComponentRendererProps = {
  component: FormComponentType
  isPreview: boolean
  value: string
  error: string | null
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  getAlignmentClass: () => string
  getGridClass: () => string
  handleBlur?: () => void
  touched?: boolean
}

type ComponentRenderer = (props: ComponentRendererProps) => ReactElement

const componentRegistry: Record<string, ComponentRenderer> = {}

export const registerComponent = (type: string, renderer: ComponentRenderer) => {
  componentRegistry[type] = renderer
}

export const getComponentRenderer = (type: string): ComponentRenderer => {
  return componentRegistry[type] || defaultRenderer
}

const defaultRenderer: ComponentRenderer = (props: ComponentRendererProps): ReactElement => {
  const { component, getAlignmentClass, getGridClass } = props
  return React.createElement(
    "div",
    { className: `${getAlignmentClass()} ${getGridClass()}` },
    React.createElement(
      "span",
      { className: "text-red-500" },
      `Unknown component type: ${component.type}`
    )
  )
}