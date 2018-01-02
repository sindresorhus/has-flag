'use strict';
module.exports = (flag, argv) => {
	argv = argv || process.argv;

	const terminatorPos = argv.indexOf('--');
	const prefix = /^-{1,2}/.test(flag) ? '' : '--';
	let pos = argv.indexOf(prefix + flag);
	pos = pos === -1 && prefix === '--' ? argv.indexOf('-' + flag) : pos;

	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};
