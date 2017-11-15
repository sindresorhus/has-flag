'use strict';
module.exports = function (flag, argv) {
	argv = argv || process.argv;

	var terminatorPos = argv.indexOf('--');
	var prefix = /^-{1,2}/.test(flag) ? '' : '--';
	var pos = argv.indexOf(prefix + flag);
	pos = pos === -1 && prefix === '--' ? argv.indexOf('-' + flag) : pos;

	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};
