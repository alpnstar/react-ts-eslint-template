const js = require('@eslint/js');
const sonarjs = require('eslint-plugin-sonarjs');
const globals = require('globals');
const tseslint = require('typescript-eslint');
const eslintReact = require('eslint-plugin-react');
const eslintReactHooks = require('eslint-plugin-react-hooks');
const eslintReactRefresh = require('eslint-plugin-react-refresh');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = tseslint.config(
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            'react': eslintReact,
            'react-hooks': eslintReactHooks,
            'react-refresh': eslintReactRefresh,
            'sonar-js': sonarjs,
            'unicorn-js': eslintPluginUnicorn,
        },
    },
    {
        ignores: ['bundle', 'node_modules', 'eslint.config.js'],
    },
    js.configs.recommended,
    sonarjs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2024,
            },
            parserOptions: {
                project: ['tsconfig.json'],
            }
        },
    },
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        rules: {
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
            'prefer-const': 'error',
            'react/jsx-curly-brace-presence': ['warn', {props: 'never', children: 'never'}],
            'react/function-component-definition': ['warn', {namedComponents: 'arrow-function'}],
            'react/self-closing-comp': ['error', {component: true, html: true}],
            'unicorn-js/prefer-query-selector': 'error',
            'max-lines': ['warn', {max: 100, "skipBlankLines": true, "skipComments": true}],
            'eqeqeq': 'error',
            'no-console': 'warn',
            'camelcase': 'error',
            'comma-dangle': 'error',
            'semi': 'error',
            'no-multiple-empty-lines': 'error',
            'prefer-arrow-callback': 'error',
            'quotes': ['error', "double"],
            'array-callback-return': 'error',
            'no-unmodified-loop-condition': 'error',
            'capitalized-comments': 'error',
            'id-length': ["error", {"max": 11}],
            'new-cap': 'error',
        },
    },
);
