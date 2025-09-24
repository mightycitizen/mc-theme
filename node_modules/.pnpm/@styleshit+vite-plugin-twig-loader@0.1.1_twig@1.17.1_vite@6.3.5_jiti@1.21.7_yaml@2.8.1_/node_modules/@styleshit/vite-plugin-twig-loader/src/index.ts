import { Plugin } from 'vite';

export default function twig() {
	return {
		name: 'vite-plugin-twig-loader',
		transform(code, id) {
			if (id.endsWith('.twig')) {
				return `import { twig } from 'twig'; export default twig({ data: \`${code}\` });`;
			}

			return null;
		},
	} satisfies Plugin;
}
