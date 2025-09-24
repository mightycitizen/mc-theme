# Vite Plugin Twig Loader

A Vite plugin that helps you loading Twig templates inside your application.

## Usage:

Install the plugin:

```BASH
npm i -D @styleshit/vite-plugin-twig-loader
```

Add it to your `vite.config.js`:

```TS
// vite.config.js
import { defineConfig } from 'vite'
import twig from '@styleshit/vite-plugin-twig-loader';

export default defineConfig({
	plugins: [twig()],
})
```

Now, you can import your Twig templates as if they were regular JavaScript modules:

```TWIG
<!-- src/App.twig -->

<h1>Hello {{ name }}!</h1>
```

```TS
// src/main.ts
import App from './App.twig';

App.render({
	name: 'John',
});
```

## Usage with TypeScript:

By default, TypsScript won't know how to handle Twig files. To fix this, you can add a declaration file to the project:

```TS
// src/types/twig.d.ts
declare module '*.twig' {
	import { Template } from 'twig';

	const contents: Template;

	export default contents;
}
```

And then, make sure it's being included in your `tsconfig.json`:

```JSON
{
	"include": [
		"src/types/**/*.d.ts"
	]
}
```

> [!NOTE]  
> If you already have a `types` folder in your project, or your `src` directory is already in the `include` array, you can adapt the paths to your needs.
