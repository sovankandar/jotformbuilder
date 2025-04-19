import type { CommonInputProps } from "./types"

export function renderCaptcha({ isPreview, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getGridClass()} border rounded-md p-4 bg-gray-50`}>
      <div className="flex flex-col items-center space-y-3">
        <div className="bg-white p-3 border rounded w-full text-center">
          <span className="font-mono text-lg tracking-widest text-gray-700">CAPTCHA12345</span>
        </div>
        <input
          type="text"
          placeholder="Enter the code above"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={!isPreview}
          required
        />
        {isPreview && <button className="text-sm text-primary hover:underline">Refresh CAPTCHA</button>}
      </div>
    </div>
  )
}
