import { ImageIcon } from "lucide-react"
import type { CommonInputProps } from "./types"

export function renderImage({ component, isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <ImageIcon className="w-10 h-10 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload image</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
          </div>
          <input type="file" className="hidden" accept="image/*" required={component.required} disabled={!isPreview} />
        </label>
      </div>
      {component.required && isPreview && <p className="mt-1 text-sm text-gray-500">This field is required</p>}
    </div>
  )
}
