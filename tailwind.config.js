/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		keyframes: {
			popUp: {
			  '0%': { transform: 'scale(0.5)', opacity: '0' },
			  '80%': { transform: 'scale(1.1)', opacity: '1' },
			  '100%': { transform: 'scale(1)' },
			},
			popOut: {
			  '0%': { transform: 'scale(1)', opacity: '1' },
			  '80%': { transform: 'scale(1.1)', opacity: '0.5' },
			  '100%': { transform: 'scale(0.5)', opacity: '0' },
			},
		  },
		  animation: {
			popUp: 'popUp 0.4s ease-in-out',
			popOut: 'popOut 0.4s ease-in-out',
		  },
		fontFamily: {
			regular: ['font-regular', ...defaultTheme.fontFamily.sans],
			medium: ['font-medium', ...defaultTheme.fontFamily.sans],
			semibold: ['font-semibold', ...defaultTheme.fontFamily.sans],
			bold: ['font-bold', ...defaultTheme.fontFamily.sans],
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
