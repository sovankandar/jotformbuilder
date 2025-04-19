import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from "lucide-react"
import type { CommonInputProps } from "./types"

export function SocialLinks({ isPreview, getAlignmentClass, getGridClass }: CommonInputProps) {
  return (
    <div className={`${getAlignmentClass()} ${getGridClass()}`}>
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="w-10 flex-shrink-0">
            <Facebook className="h-5 w-5 text-blue-600" />
          </div>
          <input
            type="url"
            placeholder="Facebook URL"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={!isPreview}
          />
        </div>
        <div className="flex items-center">
          <div className="w-10 flex-shrink-0">
            <Twitter className="h-5 w-5 text-blue-400" />
          </div>
          <input
            type="url"
            placeholder="Twitter URL"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={!isPreview}
          />
        </div>
        <div className="flex items-center">
          <div className="w-10 flex-shrink-0">
            <Instagram className="h-5 w-5 text-pink-500" />
          </div>
          <input
            type="url"
            placeholder="Instagram URL"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={!isPreview}
          />
        </div>
        <div className="flex items-center">
          <div className="w-10 flex-shrink-0">
            <Linkedin className="h-5 w-5 text-blue-700" />
          </div>
          <input
            type="url"
            placeholder="LinkedIn URL"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={!isPreview}
          />
        </div>
        <div className="flex items-center">
          <div className="w-10 flex-shrink-0">
            <Youtube className="h-5 w-5 text-red-600" />
          </div>
          <input
            type="url"
            placeholder="YouTube URL"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={!isPreview}
          />
        </div>
        <div className="flex items-center">
          <div className="w-10 flex-shrink-0">
            <Globe className="h-5 w-5 text-gray-600" />
          </div>
          <input
            type="url"
            placeholder="Website URL"
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={!isPreview}
          />
        </div>
      </div>
    </div>
  )
}
