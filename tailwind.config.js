/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                triedel: {
                    accent: '#e0cfb5',
                    text: '#090e15',
                    gradient: {
                        0: '#ebf4f5',
                        1: '#b5c6e0',
                    }
                }
            }
        },
    },
    plugins: [],
}

