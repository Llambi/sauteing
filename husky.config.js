module.exports = {
	hooks: {
		'pre-commit': 'pretty-quick --staged && npm run lint',
		'post-commit': 'git update-index --again',
	},
};
