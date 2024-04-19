import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [
		react(),
		{
			name: 'url-resolver',
			resolveId(source) {
				if (source.endsWith('.jpg')) {
					return { id: source, external: true }
				}
				return null
			},
		},
	],
	build: {
		rollupOptions: {
			external: ['forest-title.png'],
		},
	},
})
