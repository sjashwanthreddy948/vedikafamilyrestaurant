/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#E9DFC9',
          400: '#D5C7A9',
        },
        forest: {
          800: '#1A3B2C',
          850: '#153225',
          900: '#10271D',
          950: '#0B1C14',
        },
        charcoal: {
          700: '#3D4541',
          800: '#282F2C',
          900: '#1A1E1C',
          950: '#121513',
        },
        gold: {
          100: '#FBF5E6',
          200: '#F5E6BF',
          300: '#ECD28C',
          400: '#DDBB5C',
          500: '#C59B37',
          600: '#A67D25',
          700: '#84601A',
        },
        spice: {
          500: '#BC4A2B',
          600: '#9E371C',
        }
      },
      fontFamily: {
        serif: ['"DM Sans Digits"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans Digits"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        dmsans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(16, 39, 29, 0.06)',
        'soft-lg': '0 12px 36px -4px rgba(16, 39, 29, 0.09)',
        'soft-xl': '0 20px 48px -8px rgba(16, 39, 29, 0.12)',
        'gold-glow': '0 0 25px rgba(197, 155, 55, 0.25)',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      }
    },
  },
  plugins: [],
}
