export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#003135',
        'brand-teal-dark': '#034951',
        'brand-teal': '#10A4B0',
        'brand-coral': '#E07856',
        'brand-cyan-light': '#AEDDE5',
        'brand-maroon': '#8B0000',
        'brand-blue': '#1E40AF',
        'brand-icon-dark': '#10A4B0',
        'brand-icon-purple': '#8B0000',
        'brand-hover': '#964834',
      },
      fontSize: {
        'hero-title': ['4rem', { lineHeight: '1.2' }],
        'hero-title-sm': ['2.5rem', { lineHeight: '1.2' }],
        'section-title': ['3rem', { lineHeight: '1.3' }],
        'section-title-sm': ['2rem', { lineHeight: '1.3' }],
        'card-title': ['1.75rem', { lineHeight: '1.4' }],
        'body-large': ['1.125rem', { lineHeight: '1.7' }],
      },
    },
  },
}