"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import type { CommonInputProps } from "./types"

export function Signature({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  const [signatureData, setSignatureData] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)

  // Signature pad functionality
  useEffect(() => {
    if (component.type === "signature" && canvasRef.current && isPreview) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.lineWidth = 2
        ctx.lineCap = "round"
        ctx.strokeStyle = "#000000"
      }
    }
  }, [component.type, isPreview])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isPreview || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    setIsDrawing(true)

    let clientX, clientY
    if ("touches" in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !isPreview || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let clientX, clientY
    if ("touches" in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
      e.preventDefault() // Prevent scrolling when drawing
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    if (!isDrawing || !canvasRef.current) return

    setIsDrawing(false)

    // Save signature data
    const canvas = canvasRef.current
    setSignatureData(canvas.toDataURL())
  }

  const clearSignature = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      setSignatureData(null)
    }
  }

  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <div className="border rounded-lg p-2 bg-white">
        <div className="border-2 border-dashed border-gray-300 rounded-md bg-gray-50 relative">
          <canvas
            ref={canvasRef}
            width={500}
            height={150}
            className="w-full touch-none"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          {isPreview && (
            <button
              onClick={clearSignature}
              className="absolute bottom-2 right-2 bg-white text-gray-600 px-2 py-1 text-xs rounded border shadow-sm hover:bg-gray-50"
            >
              Clear
            </button>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">{signatureData ? "Signature captured" : "Please sign above"}</p>
        {component.required && isPreview && !signatureData && (
          <p className="text-sm text-red-500">Signature is required</p>
        )}
      </div>
    </div>
  )
}
