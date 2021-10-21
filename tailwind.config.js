module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'layout': '64px minmax(0, 1fr)',
      },
      zIndex: {
        '-1': '-1',
      },
      fontFamily: {
        'Kumbh': ['Kumbh Sans', 'sans-serif']
      }
    },
    screens: {
      'sm': { 'max': '639px' },
      // => @media (max-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
};
