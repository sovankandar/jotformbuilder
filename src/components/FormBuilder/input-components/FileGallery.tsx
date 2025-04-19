"use client"

import type React from "react"

import { FileIcon } from "lucide-react"
import { useState } from "react"
import type { CommonInputProps } from "./types"

export function renderFileGallery({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [filePreviewUrls, setFilePreviewUrls] = useState<string[]>([])

  // File gallery handling
  const handleFileGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files.length) return

    const newFiles = Array.from(e.target.files)
    setUploadedFiles((prev) => [...prev, ...newFiles])

    // Create preview URLs
    const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file))
    setFilePreviewUrls((prev) => [...prev, ...newPreviewUrls])
  }

  const removeFile = (index: number) => {
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(filePreviewUrls[index])

    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
    setFilePreviewUrls((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <div className="border rounded-lg p-4 bg-gray-50">
        <div className="mb-4">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <FileIcon className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload multiple files</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, PDF, DOC up to 10MB each</p>
            </div>
            <input type="file" className="hidden" multiple onChange={handleFileGalleryChange} disabled={!isPreview} />
          </label>
        </div>

        {filePreviewUrls.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {filePreviewUrls.map((url, index) => (
              <div key={index} className="relative group">
                <div className="h-24 border rounded-md bg-white flex items-center justify-center overflow-hidden">
                  {uploadedFiles[index]?.type.startsWith("image/") ? (
                    <img src={url || "/placeholder.svg"} alt={`Preview ${index}`} className="h-full object-contain" />
                  ) : (
                    <div className="flex flex-col items-center p-2 text-center">
                      <FileIcon className="h-8 w-8 text-gray-400" />
                      <span className="text-xs text-gray-500 mt-1 truncate w-full">{uploadedFiles[index]?.name}</span>
                    </div>
                  )}
                </div>
                {isPreview && (
                  <button
                    onClick={() => removeFile(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {component.required && isPreview && filePreviewUrls.length === 0 && (
          <p className="mt-2 text-sm text-red-500">Please upload at least one file</p>
        )}
      </div>
    </div>
  )
}
