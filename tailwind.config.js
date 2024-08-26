/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors:{
        customPurple: '#4E148C',
        customPink: '#FFC0CB',
        customDarkp: '#24004A',
        CustomGrey: '#F5F5F5',
        customRed: '#FF6666',
        customGreyD: '#333333',
        customYellow: '#F5F5DC',
        customBlue: '#003F6C',
        customDarkblue: '#002642',
        customLightblue: '#1674B9',
        customSkin: '#FFF5E1',
        customLighterblue: '#3581B8',
        customLightgrey: '#D9D9D9',
      },
      height:{
        'customHeight' : '798px',
        'custH' : '700px',
        'hoght' : '400px',
        'high' : '465px',
        'hough': '400px',
        'small': '72px',
        'custard': '750px',
        'customheight': '600px',
        'custH2': '550px',
        'height': '2368px',
        'heighthH1': '2000px',
        
      },
      width:{
         'custom': '640px',
         'custW': '680px',
         'coh' : '850px',
         'customW' : '400px',
         'texW' : '570px',
         'texW2': '530px',
         'texW3': '490px',
         'texW4': '450px',
         'texW5': '410px',
         'texW6': '370px',
         'smallW': '72px',
         'wedth' : '900px',
         'mustard': '750px',
         'customwidth': '600px',
         'textW7': '550px',
      },
      maxWidth:{
        'screenW' : '2300px',
        'coh2' : '850px',
      },

      screens:{
        '3xl': '1778px',
        'blu': '1488px',
        'se' : '355px',
      }
    },
  },
  plugins: [],
}

