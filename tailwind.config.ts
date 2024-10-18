import type { Config } from 'tailwindcss';

const config: Config = {
   darkMode: ['class'],
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))',
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))',
            },
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))',
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))',
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))',
            },
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            chart: {
               '1': 'hsl(var(--chart-1))',
               '2': 'hsl(var(--chart-2))',
               '3': 'hsl(var(--chart-3))',
               '4': 'hsl(var(--chart-4))',
               '5': 'hsl(var(--chart-5))',
            },
            white: 'var(--white)',
            black: 'var(--black)',
            darkGray: 'var(--dark-gray)',
            charcoal: 'var(--charcoal)',
            slateGray: 'var(--slate-gray)',
            skyDark: 'var(--sky-dark)',
            blurGray: 'var(--blur-gray)',
            lightGray: 'var(--light-gray)',
            heayGray: 'var(--heay-gray)',
            star: 'var(--star)',
            primeBlue: 'var(--prime-blue)',
            neoneBlue: 'var(--neon-blue)',
            neoneGreen: 'var(--neon-green)',
            neoneRed: 'var(--neon-red)',
            neonePurple: 'var(--neon-purple)',
            neoneYellow: 'var(--neon-yellow)',
            neoneOrange: 'var(--neon-orange)',
         },
         fontFamily: {
            inter: ['Inter', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            merriweather: ['Merriweather', 'serif'],
            lato: ['Lato', 'sans-serif'],
         },
         boxShadow: {
            blur: '0 4px 10px rgba(0, 0, 0, 0.5)',
            heavyGray: '0 4px 15px var(--heay-gray)',
            darkGray: '0 4px 15px var(--dark-gray)',
            dark: '0 4px 15px var(--charcoal)',
            'box-shadow': '0 15px 30px rgba(0, 0, 0, 0.3)',
            'inner-box-shadow': 'inset 0px 0px 11px rgba(0, 0, 0, 0)',
            'neon-blue':
               '0 0 10px var(--neon-blue), 0 0 20px var(--neon-blue), 0 0 30px var(--neon-blue)',
            'neon-green':
               '0 0 10px var(--neon-green), 0 0 20px var(--neon-green), 0 0 30px var(--neon-green)',
            'neon-red':
               '0 0 10px var(--neon-red), 0 0 20px var(--neon-red), 0 0 30px var(--neon-red)',
            'neon-purple':
               '0 0 10px var(--neon-purple), 0 0 20px var(--neon-purple), 0 0 30px var(--neon-purple)',
            'neon-yellow':
               '0 0 10px var(--neon-yellow), 0 0 20px var(--neon-yellow), 0 0 30px var(--neon-yellow)',
         },
         textShadow: {
            main: 'var(--main-text)',
            sub: 'var(--sub-text)',
            blur: '0 0 5px var(--blur-gray), 0 0 10px var(--blur-gray), 0 0 15px var(--blur-gray)',
            heavyGray:
               '0 0 5px var(--heay-gray), 0 0 10px var(--heay-gray), 0 0 15px var(--heay-gray)',
            darkGray:
               '0 0 5px var(--dark-gray), 0 0 10px var(--dark-gray), 0 0 15px var(--dark-gray)',
            dark: '0 0 5px var(--charcoal), 0 0 10px var(--charcoal), 0 0 15px var(--charcoal)',
            neonBlue:
               '0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue), 0 0 15px var(--neon-blue)',
            neonGreen:
               '0 0 5px var(--neon-green), 0 0 10px var(--neon-green), 0 0 15px var(--neon-green)',
            neonRed:
               '0 0 5px var(--neon-red), 0 0 10px var(--neon-red), 0 0 15px var(--neon-red)',
            neonPurple:
               '0 0 5px var(--neon-purple), 0 0 10px var(--neon-purple), 0 0 15px var(--neon-purple)',
            neonYellow:
               '0 0 5px var(--neon-yellow), 0 0 10px var(--neon-yellow), 0 0 15px var(--neon-yellow)',
         },
      },
   },
   plugins: [require('tailwindcss-animate'), require('tailwindcss-textshadow')],
};
export default config;
