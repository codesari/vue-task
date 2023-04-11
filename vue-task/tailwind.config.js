/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        260: '260px',
        1440: '1440px',
        358: '358px',
        310: '310px',
        100: '100px',
        183: '183px'
      },
      height: {
        1024: '1024px',
        370: '370px',
        330: '330px',
        100: '100px',
        122: '122px'
      },
      colors: {
        subtitle: '#5C6672',
        title: '#26303E',
        border: '#D8D9DD',
        primary: '#4F359B',
        gray2: '#485B69',
        graylight: '#F5F5F5'
      },
      gap: {
        763: '763px'
      },
      customLeft: {
        288: '288px',
        297: '297px',
        42: '-42px'
      }
    }
  },
  plugins: []
}

