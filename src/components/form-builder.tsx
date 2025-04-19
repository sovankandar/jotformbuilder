"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FormEditor } from "./FormBuilder/FormEditor"
import { FormPreview } from "./FormBuilder/FormPreview"
import { PropertiesPanel } from "./FormBuilder/PropertiesPanel"
import { ThemePanel } from "./FormBuilder/ThemePanel"
import type { FormComponentType } from "@/types/types"
import { Cog, Eye, Pencil, Smartphone, Tablet, Monitor, Plus, X } from "lucide-react"
import { FormSubmissionFeedback } from "./FormBuilder/FormSubmissionFeedback"
import { ThemeProvider } from "@/lib/theme/themeContext"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function FormBuilder() {
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [formData, setFormData] = useState<FormComponentType[]>([])
  const [selectedComponent, setSelectedComponent] = useState<FormComponentType | null>(null)
  const [showLeftSidebar, setShowLeftSidebar] = useState(true)
  const [showRightSidebar, setShowRightSidebar] = useState(false)
  const [rightSidebarContent, setRightSidebarContent] = useState<"properties" | "theme">("properties")
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [showSubmissionFeedback, setShowSubmissionFeedback] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error">("success")
  const [showThemePanel, setShowThemePanel] = useState(false)
  const [showPropertiesPanel, setShowPropertiesPanel] = useState(false)

  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)")
  const isMobileOrTablet = isMobile || isTablet

  // Hide sidebars on mobile/tablet by default
  useEffect(() => {
    if (isMobileOrTablet) {
      setShowLeftSidebar(false)
    } else {
      setShowLeftSidebar(true)
    }
  }, [isMobileOrTablet])

  const handleComponentSelect = (component: FormComponentType | null) => {
    setSelectedComponent(component)
    if (component) {
      if (isMobileOrTablet) {
        setShowPropertiesPanel(true)
        setShowLeftSidebar(false) // Close left sidebar when component is selected on mobile
      } else {
        setShowRightSidebar(true)
        setRightSidebarContent("properties")
      }
    }
  }

  const handleOpenSettings = (component: FormComponentType) => {
    setSelectedComponent(component)
    if (isMobileOrTablet) {
      setShowPropertiesPanel(true)
    } else {
      setShowRightSidebar(true)
      setRightSidebarContent("properties")
    }
  }

  const handleDeleteComponent = (id: string) => {
    setFormData(formData.filter((comp) => comp.id !== id))
    if (selectedComponent?.id === id) {
      setSelectedComponent(null)
    }
  }

  const handleUpdateComponent = (updated: FormComponentType) => {
    setFormData(formData.map((comp) => (comp.id === updated.id ? updated : comp)))
    setSelectedComponent(updated)
  }

  // const handleAddComponent = (component: any) => {
  //   const newComponent = {
  //     ...component,
  //     id: `${component.type}_${Date.now()}`,
  //     label: component.label || "New Component",
  //     gridColumns: "full",
  //   }

  //   if (component.type === "select" || component.type === "radio") {
  //     newComponent.options = ["Option 1", "Option 2", "Option 3"]
  //   }

  //   setFormData([...formData, newComponent])

  //   // Close the sidebar on mobile after adding a component
  //   if (isMobileOrTablet) {
  //     setShowLeftSidebar(false)
  //   }
  // }

  const getViewportClass = () => {
    switch (viewportMode) {
      case "mobile":
        return "max-w-[375px]"
      case "tablet":
        return "max-w-[768px]"
      default:
        return "max-w-full"
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Check if all required fields are filled
    const formElements = e.target as HTMLFormElement
    const isValid = formElements.checkValidity()

    // If form is valid, show success message
    setSubmissionStatus(isValid ? "success" : "error")
    setShowSubmissionFeedback(true)

    // Hide the feedback after 3 seconds
    setTimeout(() => {
      setShowSubmissionFeedback(false)
    }, 3000)
  }

  const handleThemeButtonClick = () => {
    if (isMobileOrTablet) {
      setShowThemePanel(true)
    } else {
      setRightSidebarContent("theme")
      setShowRightSidebar(true)
    }
  }

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm z-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center px-4 py-2">
              <h1 className="text-xl font-bold text-gray-800">Form Builder</h1>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPreviewMode(false)}
                  className={`py-2 px-4 rounded-md font-medium transition-all flex items-center gap-2 ${
                    !isPreviewMode ? "bg-lime-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Pencil size={18} />
                  <span className="hidden sm:inline">Edit</span>
                </button>
                <button
                  onClick={() => setIsPreviewMode(true)}
                  className={`py-2 px-4 rounded-md font-medium transition-all flex items-center gap-2 ${
                    isPreviewMode ? "bg-fuchsia-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Eye size={18} />
                  <span className="hidden sm:inline">Preview</span>
                </button>
                {isPreviewMode && (
                  <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-md ml-2">
                    <button
                      onClick={() => setViewportMode("mobile")}
                      className={`p-1.5 rounded ${
                        viewportMode === "mobile"
                          ? "bg-white shadow-sm text-blue-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      title="Mobile view"
                    >
                      <Smartphone size={16} />
                    </button>
                    <button
                      onClick={() => setViewportMode("tablet")}
                      className={`p-1.5 rounded ${
                        viewportMode === "tablet"
                          ? "bg-white shadow-sm text-blue-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      title="Tablet view"
                    >
                      <Tablet size={16} />
                    </button>
                    <button
                      onClick={() => setViewportMode("desktop")}
                      className={`p-1.5 rounded ${
                        viewportMode === "desktop"
                          ? "bg-white shadow-sm text-blue-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      title="Desktop view"
                    >
                      <Monitor size={16} />
                    </button>
                  </div>
                )}
                <button
                  onClick={handleThemeButtonClick}
                  className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <Cog size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar - Components (Desktop) */}
          {!isPreviewMode && showLeftSidebar && !isMobileOrTablet && (
            <div className="w-[280px] h-full border-r border-gray-200 bg-white shadow-md overflow-hidden z-10">
              <FormEditor formData={formData} setFormData={setFormData} />
            </div>
          )}

          {/* Main Content - Form Preview */}
          <div className="flex-1 h-full overflow-auto bg-gray-100 p-6 relative">
            <div
              className={`mx-auto bg-white rounded-xl shadow-lg min-h-[600px] p-6 transition-all ${
                isPreviewMode ? getViewportClass() : "max-w-2xl"
              }`}
            >
              <FormPreview
                formData={formData}
                isPreviewMode={isPreviewMode}
                onSelectComponent={handleComponentSelect}
                selectedComponent={selectedComponent}
                onOpenSettings={handleOpenSettings}
                onDeleteComponent={handleDeleteComponent}
                onSubmit={handleFormSubmit}
              />
            </div>

            {/* Form Submission Feedback */}
            <AnimatePresence>
              {showSubmissionFeedback && <FormSubmissionFeedback status={submissionStatus} />}
            </AnimatePresence>
          </div>

          {/* Right Sidebar - Properties (Desktop) */}
          {showRightSidebar && !isMobileOrTablet && (
            <div className="w-[300px] h-full border-l border-gray-200 bg-white shadow-md overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="font-bold text-lg">
                    {rightSidebarContent === "properties" ? "Properties" : "Theme Settings"}
                  </h2>
                  <button
                    onClick={() => setShowRightSidebar(false)}
                    className="p-1 rounded-md hover:bg-gray-100 text-gray-500"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {rightSidebarContent === "properties" && selectedComponent ? (
                    <PropertiesPanel component={selectedComponent} onUpdate={handleUpdateComponent} />
                  ) : (
                    <ThemePanel />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile/Tablet Add Element Button */}
        {!isPreviewMode && isMobileOrTablet && (
          <button
            onClick={() => setShowLeftSidebar(true)}
            className="fixed bottom-6 left-6 rounded-full w-14 h-14 shadow-lg z-50 flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <Plus size={24} />
            <span className="sr-only">Add Element</span>
          </button>
        )}

        {/* Mobile/Tablet Left Sidebar - Full Screen Overlay */}
        <AnimatePresence>
          {!isPreviewMode && showLeftSidebar && isMobileOrTablet && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-white"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="font-bold text-lg">Add Components</h2>
                  <button
                    onClick={() => setShowLeftSidebar(false)}
                    className="p-1 rounded-md hover:bg-gray-100 text-gray-500"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <FormEditor
                    formData={formData}
                    setFormData={(newData) => {
                      setFormData(newData)
                      if (isMobileOrTablet && newData.length > formData.length) {
                        setShowLeftSidebar(false)
                      }
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile/Tablet Properties Panel - From Right Side */}
        <AnimatePresence>
          {showPropertiesPanel && isMobileOrTablet && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-50"
              onClick={() => setShowPropertiesPanel(false)}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute right-0 top-0 h-full w-[280px] sm:w-[350px] bg-white shadow-lg overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="font-bold text-lg">Properties</h2>
                  <button
                    onClick={() => setShowPropertiesPanel(false)}
                    className="p-1 rounded-md hover:bg-gray-100 text-gray-500"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {selectedComponent && (
                    <PropertiesPanel component={selectedComponent} onUpdate={handleUpdateComponent} />
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile/Tablet Theme Panel */}
        <AnimatePresence>
          {showThemePanel && isMobileOrTablet && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-50"
              onClick={() => setShowThemePanel(false)}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 right-0 h-[80vh] bg-white shadow-lg rounded-t-xl overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="font-bold text-lg">Theme Settings</h2>
                  <button
                    onClick={() => setShowThemePanel(false)}
                    className="p-1 rounded-md hover:bg-gray-100 text-gray-500"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="p-4 overflow-y-auto">
                  <ThemePanel />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
