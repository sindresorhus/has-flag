'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(fn('unicorn', ['--foo', '--unicorn', '--bar']));
	t.assert(fn('--unicorn', ['--foo', '--unicorn', '--bar']), 'optional prefix');
	t.assert(fn('unicorn=rainbow', ['--foo', '--unicorn=rainbow', '--bar']));
	t.assert(fn('unicorn', ['--unicorn', '--', '--foo']));
	t.assert(!fn('unicorn', ['--foo', '--', '--unicorn']), 'don\'t match flags after terminator');
	t.assert(!fn('unicorn', ['--foo']));
	t.end();
});
