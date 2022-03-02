/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	extends: [
		"kentcdodds",
		"kentcdodds/react",
		"kentcdodds/jsx-a11y",
		"plugin:jsdoc/recommended",
		"@remix-run/eslint-config",
	],
	rules: {
		"@typescript-eslint/explicit-function-return-type": ["off"],
		"@typescript-eslint/unbound-method": "off",
		"@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
		"import/prefer-default-export": "off",
		"jsdoc/require-param-description": "off",
		"jsdoc/require-returns": "off",
		"no-console": "warn",
		"no-restricted-imports": ["error", { patterns: ["@/modules/*/*"] }],
		"no-warning-comments": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
		"react/jsx-sort-props": ["warn", { reservedFirst: ["key"] }],
	},
	settings: {
		"import/resolver": {
			alias: {
				extensions: [".js", ".jsx"],
				map: [["~", "./app"]],
			},
		},
		jsdoc: {
			mode: "typescript",
		},
	},
};
