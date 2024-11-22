/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: '#5A5959',
                red: '#D01C28',
                yellow: '#FFEAAE',
                mustard: '#FCCA3F',
                purple: '#5F00D9',
                orange:'#F6820C'
            },
        },
    },
    plugins: [],
}

