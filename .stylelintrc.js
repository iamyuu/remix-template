/**
 * @type {import('stylelint').Config}
 */
module.exports = {
	extends: ["stylelint-config-standard", "stylelint-config-prettier", "stylelint-config-idiomatic-order"],
	plugins: ["stylelint-order", "stylelint-color-format", "stylelint-declaration-block-no-ignored-properties"],
	rules: {
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["extends", "tailwind", "layer"],
			},
		],
		"color-format/format": {
			format: "hsla",
		},
		"declaration-empty-line-before": [
			"always",
			{
				ignore: ["after-comment", "after-declaration", "first-nested", "inside-single-line-block"],
			},
		],
		"unit-allowed-list": ["em", "rem", "deg", "vw", "vh", "%"],
		"plugin/declaration-block-no-ignored-properties": true,
	},
};
