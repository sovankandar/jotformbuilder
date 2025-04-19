export type ThemeConfig = {
  colors: {
    primary: string
    secondary: string
    background: string
    text: string
    border: string
    success: string
    error: string
    warning: string
    info: string
  }
  typography: {
    fontFamily: string
    fontSize: {
      sm: string
      base: string
      lg: string
      xl: string
      "2xl": string
    }
  }
  layout: {
    formWidth: "narrow" | "medium" | "wide" | "full"
    spacing: "compact" | "normal" | "relaxed"
    borderRadius: "none" | "small" | "medium" | "large" | "full"
  }
}

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: "#0466c8",
    secondary: "#6B7280",
    background: "#FFFFFF",
    text: "#1F2937",
    border: "#E5E7EB",
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",
    info: "#3B82F6",
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
  },
  layout: {
    formWidth: "medium",
    spacing: "normal",
    borderRadius: "medium",
  },
}

// Helper function to get CSS values from theme
export const getThemeValue = (theme: ThemeConfig) => {
  // Border radius values
  const borderRadiusValues = {
    none: "0px",
    small: "0.25rem",
    medium: "0.5rem",
    large: "0.75rem",
    full: "9999px",
  }

  // Spacing values
  const spacingValues = {
    compact: "0.5rem",
    normal: "1rem",
    relaxed: "1.5rem",
  }

  // Form width values
  const formWidthValues = {
    narrow: "400px",
    medium: "600px",
    wide: "800px",
    full: "100%",
  }

  return {
    borderRadius: borderRadiusValues[theme.layout.borderRadius],
    spacing: spacingValues[theme.layout.spacing],
    formWidth: formWidthValues[theme.layout.formWidth],
  }
}
