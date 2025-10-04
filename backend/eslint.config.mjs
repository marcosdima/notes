import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import pluginSecurity from 'eslint-plugin-security';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: {
            js,
            import: pluginImport,
            jest: pluginJest,
            security: pluginSecurity,
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.es2021,
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            eqeqeq: ['error', 'always'],
            'prefer-const': 'error',
            'no-shadow': 'error',
        },
        ignores: ['node_modules/*', 'dist/*', 'build/*', '.env'],
    },
]);
