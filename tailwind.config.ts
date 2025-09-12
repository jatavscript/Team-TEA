import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				monastery: {
					gold: 'hsl(var(--monastery-gold))',
					burgundy: 'hsl(var(--monastery-burgundy))'
				},
				himalayan: {
					blue: 'hsl(var(--himalayan-blue))',
					mist: 'hsl(var(--mountain-mist))'
				},
				prayer: {
					red: 'hsl(var(--prayer-flag-red))',
					yellow: 'hsl(var(--prayer-flag-yellow))',
					green: 'hsl(var(--prayer-flag-green))',
					blue: 'hsl(var(--prayer-flag-blue))',
					white: 'hsl(var(--prayer-flag-white))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-monastery': 'var(--gradient-monastery)',
				'gradient-himalayan': 'var(--gradient-himalayan)',
				'gradient-sacred': 'var(--gradient-sacred)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-red-pink': 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
				'gradient-blue-cyan': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
				'gradient-green-emerald': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
				'gradient-orange-yellow': 'linear-gradient(135deg, #f97316 0%, #eab308 100%)'
			},
			boxShadow: {
				'monastery': 'var(--shadow-monastery)',
				'glow': 'var(--shadow-glow)',
				'elevated': 'var(--shadow-elevated)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'monastery-spin': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'monastery-spin': 'monastery-spin 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
