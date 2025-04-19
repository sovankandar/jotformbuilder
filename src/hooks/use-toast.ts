"use client"

import { useContext } from "react"
import { ToastContext } from "@/components/ui/toast"

interface ToastProps {
  title: string
  description?: string
  duration?: number
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }

  return {
    toast: (props: ToastProps) => context.addToast(props),
  }
}

export { ToastProvider } from "@/components/ui/toast"