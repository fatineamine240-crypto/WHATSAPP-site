/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#22c55e',   // الأخضر للأزرار
        secondary: '#facc15', // الأصفر للعناوين
        accent: '#3b82f6',    // الأزرق للأدمنية
        darkbg: '#0f172a'     // خلفية داكنة عامة
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
        }
