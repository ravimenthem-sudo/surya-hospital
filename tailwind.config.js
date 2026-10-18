/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surya: {
          /* Brand Color Palette matching Creative Direction & Reference */
          canvas: '#FFF9F3',          // Warm Canvas page background
          dark: '#1A1D20',            // Primary Dark Text / Charcoal
          muted: '#62666D',           // Secondary Body Text
          border: '#E2D9D0',          // Warm Borders
          terracotta: {
            DEFAULT: '#A84328',       // Terracotta Accent
            secondary: '#C85235',     // Secondary Terracotta
            soft: '#F8E6DC',          // Soft Terracotta Tint
            hover: '#8F371F',
          },
          teal: {
            DEFAULT: '#0D4855',       // Deep Clinical Teal
            dark: '#082E37',
            light: '#E8F4F1',
            muted: '#2A6675',
          },
          emergency: '#DC2626',       // Emergency Red
          
          /* Token Aliases for compatibility */
          pageBg: '#FFF9F3',
          card: '#FFFFFF',
          heading: '#1A1D20',
          secondaryText: '#62666D',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(37, 43, 51, 0.04)',
        'card': '0 2px 12px -2px rgba(198, 83, 50, 0.06), 0 1px 4px -1px rgba(37, 43, 51, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(198, 83, 50, 0.12), 0 4px 10px -2px rgba(37, 43, 51, 0.06)',
        'emergency': '0 4px 16px 0 rgba(198, 83, 50, 0.25)',
      },
      borderRadius: {
        'card': '0.875rem',
        'card-lg': '1.25rem',
      },
    },
  },
  plugins: [],
};
