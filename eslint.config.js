import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['build/**', '.react-router/**', 'node_modules/**'] },
	js.configs.recommended,
	...tseslint.configs.strict,
	{
		files: ['**/*.{ts,tsx}'],
		plugins: { react, 'react-hooks': reactHooks, 'jsx-a11y': jsxA11y },
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: { ecmaFeatures: { jsx: true } }
		},
		settings: { react: { version: 'detect' } },
		rules: {
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			...jsxA11y.configs.strict.rules,
			// The one permitted use is JSON-LD built by JSON.stringify from typed
			// data (src/components/JsonLd.tsx), which disables this rule inline.
			'react/no-danger': 'error',
			'react/jsx-no-target-blank': ['error', { allowReferrer: false, enforceDynamicLinks: 'always' }],
			'react/jsx-no-script-url': 'error',
			'react/prop-types': 'off',
			'no-restricted-syntax': [
				'error',
				{
					selector: "JSXAttribute[name.name='style']",
					message: 'Inline style attributes are blocked by the CSP (style-src has no unsafe-inline). Use classes.'
				}
			]
		}
	},
	{
		files: ['public/**/*.js'],
		languageOptions: { globals: globals.browser, sourceType: 'script' }
	},
	{
		files: ['scripts/**/*.{js,mjs,ts}', '*.config.{js,ts}'],
		languageOptions: { globals: globals.node }
	}
);
