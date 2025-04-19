'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FormEditor } from './FormEditor';
import { FormPreview } from './FormPreview';
import { ThemePanel } from './ThemePanel';
import { PropertiesPanel } from './PropertiesPanel';
import { FormComponentType } from '@/types/types';

export const FormBuilder = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [formData, setFormData] = useState<FormComponentType[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<FormComponentType | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <div className="border-b">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex gap-4 px-4">
            <button
              onClick={() => setIsPreviewMode(false)}
              className={`py-3 px-6 font-medium transition-colors relative ${
                !isPreviewMode 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                </svg>
                Edit Form
              </span>
            </button>
            <button
              onClick={() => setIsPreviewMode(true)}
              className={`py-3 px-6 font-medium transition-colors relative ${
                isPreviewMode 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                Preview Form
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <motion.div
          initial={{ width: '250px' }}
          animate={{ width: isPreviewMode ? '0px' : '250px' }}
          className="h-full border-r border-gray-200 bg-gray-50"
        >
          <FormEditor 
            formData={formData} 
            setFormData={setFormData}
          />
        </motion.div>
        
        <motion.div
          initial={{ width: 'calc(100% - 500px)' }}
          animate={{ 
            width: isPreviewMode ? 'calc(100% - 250px)' : 'calc(100% - 500px)',
          }}
          className="h-full overflow-auto bg-gray-100 p-8"
        >
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg min-h-[600px] p-6">
            <FormPreview 
              formData={formData}
              isPreviewMode={isPreviewMode}
              onSelectComponent={setSelectedComponent}
              selectedComponent={selectedComponent}
              onOpenSettings={(comp) => {
                setSelectedComponent(comp);
                setShowSettings(true);
              }}
              onDeleteComponent={(id) => {
                setFormData(formData.filter(comp => comp.id !== id));
                setSelectedComponent(null);
                setShowSettings(false);
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ width: '250px' }}
          animate={{ width: showSettings || (!isPreviewMode && selectedComponent) ? '250px' : '0px' }}
          className="h-full border-l border-gray-200 bg-gray-50 overflow-hidden"
        >
          {selectedComponent ? (
            <PropertiesPanel 
              component={selectedComponent}
              onUpdate={(updated) => {
                setFormData(formData.map(comp => 
                  comp.id === updated.id ? updated : comp
                ));
              }}
            />
          ) : (
            <ThemePanel />
          )}
        </motion.div>
      </div>
    </div>
  );
};