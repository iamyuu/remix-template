/**
 * @type {Object<string, string>}
 */
module.exports = {
	"*.{js,jsx,ts,tsx}": "eslint --fix --cache --max-warnings 0",
	"*.{js,jsx,ts,tsx,css}": "prettier --write",
};
