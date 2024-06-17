/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                triedel: {
                    accent: '#e0cfb5',
                    text: '#090e15',
                    gradient: {
                        0: '#ebf4f5',
                        1: '#698cbf',
                    },
                },
                "triedel-dark": {
                    accent: '#e0cfb5',
                    text: '#ebf4f5',
                    gradient: {
                        0: '#294861',
                        1: '#0e1c26',
                    },
                }
            },
            spacing: {
                'content': '1000px'
            }
        },
    },
    plugins: [],
}

