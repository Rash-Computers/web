module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				bg: '#ECEBEE',
				text: '#424242',
				textSecondary: '#707070',
				primary: '#6C63FF',
			},
			spacing: {
				'90vh': '90vh',
				577: '577px',
			},
			lineHeight: {
				'60pt': '60pt',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
