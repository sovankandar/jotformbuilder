"use client"

import { motion } from "framer-motion"
import { CheckCircle, AlertCircle } from "lucide-react"

interface FormSubmissionFeedbackProps {
  status: "success" | "error"
}

export function FormSubmissionFeedback({ status }: FormSubmissionFeedbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div
        className={`px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ${
          status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
        }`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {status === "success" ? (
            <CheckCircle className="h-6 w-6 text-green-500" />
          ) : (
            <AlertCircle className="h-6 w-6 text-red-500" />
          )}
        </motion.div>
        <div>
          <p className="font-medium">
            {status === "success" ? "Form submitted successfully!" : "Error submitting form. Please try again."}
          </p>
          <p className="text-sm">
            {status === "success"
              ? "Thank you for your submission. We'll get back to you soon."
              : "There was a problem processing your submission. Please check your information and try again."}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
