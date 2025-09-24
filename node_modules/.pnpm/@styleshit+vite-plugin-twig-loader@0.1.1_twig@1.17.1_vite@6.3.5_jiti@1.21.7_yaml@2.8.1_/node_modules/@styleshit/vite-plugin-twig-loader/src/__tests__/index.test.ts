import { describe, expect, it } from 'vitest';
import twig from '../index';

describe('Vite Plugin Twig Loader', () => {
	it('should transform .twig files', () => {
		// Arrange.
		const plugin = twig();

		const files = {
			'test.twig': 'Hello {{ name }}!',
			'test.js': 'console.log("Hello World!");',
		};

		// Act.
		const transformed = Object.entries(files).map(([id, code]) => {
			// @ts-expect-error - We're not passing the full Vite Plugin API.
			return plugin.transform(code, id);
		});

		// Assert.
		expect(transformed).toEqual([
			"import { twig } from 'twig'; export default twig({ data: `Hello {{ name }}!` });",
			null,
		]);
	});
});
