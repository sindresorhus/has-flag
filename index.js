'use strict';
module.exports = function (flags, argv) {
	argv = argv || process.argv;

	var contains = false;

	if (Array.isArray(flags)) {
		var matches = flags.filter(function (flag) {
			return containsTheTerm(flag, argv);
		});

		contains = flags.length === matches.length;
	} else {
		contains = containsTheTerm(flags, argv);
	}

	return contains;
};

function containsTheTerm(flag, argv) {
	var terminatorPos = argv.indexOf('--');
	var prefix = /^-{1,2}/.test(flag) ? '' : '--';
	var pos = argv.indexOf(prefix + flag);

	if (typeof flag === 'undefined') {
		return false;
	}

	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
}
