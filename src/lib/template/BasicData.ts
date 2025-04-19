import { Heading, SeparatorHorizontal, SectionIcon, Type, TextCursorInput, KeyRound, Mail, Hash, Phone, ListFilter, CheckSquare, CircleDot, FileIcon, ImageIcon, Calendar, Clock, Shield, Send, Square } from "lucide-react"
const BASIC_COMPONENTS = [
    { id: "heading", label: "Heading", type: "heading", icon: Heading },
    { id: "divider", label: "Divider", type: "divider", icon: SeparatorHorizontal },
    { id: "sectionBreak", label: "Section Break", type: "sectionBreak", icon: SectionIcon },
  
    { id: "text", label: "Text Input", type: "text", icon: Type },
    { id: "textarea", label: "Text Area", type: "textarea", icon: TextCursorInput },
    { id: "password", label: "Password", type: "password", icon: KeyRound },
    { id: "email", label: "Email Input", type: "email", icon: Mail },
    { id: "number", label: "Number Input", type: "number", icon: Hash },
    { id: "tel", label: "Phone Input", type: "tel", icon: Phone },
  
    { id: "select", label: "Dropdown", type: "select", icon: ListFilter },
    { id: "checkbox", label: "Checkbox", type: "checkbox", icon: CheckSquare },
    { id: "radio", label: "Radio Group", type: "radio", icon: CircleDot },
  
    { id: "file", label: "File Upload", type: "file", icon: FileIcon },
    { id: "image", label: "Image Upload", type: "image", icon: ImageIcon },
    { id: "date", label: "Date Picker", type: "date", icon: Calendar },
    { id: "time", label: "Time Picker", type: "time", icon: Clock },
    { id: "captcha", label: "CAPTCHA", type: "captcha", icon: Shield },
  
    { id: "submit", label: "Submit Button", type: "submit", icon: Send },
    { id: "button", label: "Regular Button", type: "button", icon: Square },
  ]

  export default BASIC_COMPONENTS