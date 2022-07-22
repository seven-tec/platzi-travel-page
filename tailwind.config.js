/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ["index.html",
    "./src/**/*.{html,js}"],
    theme: {
        colors: {
            'primary': "#CC2D4A",
            'secondary': "#8FA206",
            'tertiary': "#61AEC9",
            'white': '#ffffff',
            'black': '#000000',
            'gray': '#f5f5f5',
            'gray-dark': '#d7d7d7',
            'gray-800': '#1d1d1d',
            'gray-300': '#e0e0e0',
            'gray-900': '#121212',
            'gray-700': '#333333',
        },
        fontFamily: {
            Montserrat: ["Montserrat", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                'sanFrancisco': "url('../img/sanFrancisco.jpg')",
                'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
                'yosemite': "url('../img/yosemite.jpg')",
                'LA': "url('../img/LA.jpg')",
                'seattle': "url('../img/seattle.jpg')",
                'new_york': "url('../img/new_york.jpg')",
                'norway': "url('../img/norway.jpg')",
                'sydney': "url('../img/sydney.jpg')",
                'miami': "url('../img/miami.jpg')",
                'switzerland': "url('../img/switzerland.jpg')",
                'bali': "url('../img/bali.jpg')",
                'chicago': "url('../img/chicago.jpg')",
                'europe': "url('../img/europe.jpg')",
                'iceland': "url('../img/iceland.jpg')",
            }
        },
    },
    variants: {
        width: ['responsive', 'hover', 'focus', 'group-hover'],
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar-hide')
        // ...
    ],
}