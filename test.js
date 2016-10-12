import test from 'ava';
import m from './';

test(t => {
	t.true(m('unicorn', ['--foo', '--unicorn', '--bar']));
	t.true(m('--unicorn', ['--foo', '--unicorn', '--bar']), 'optional prefix');
	t.true(m('unicorn=rainbow', ['--foo', '--unicorn=rainbow', '--bar']));
	t.true(m('unicorn', ['--unicorn', '--', '--foo']));
	t.true(m('-u', ['-f', '-u', '-b']));
	t.true(m('-u', ['-u', '--', '-f']));
	t.true(m(['-f', '-u'], ['-u', '-f', '--']));
	t.true(m(['unicorn', '-f'], ['-f', '--unicorn']));
	t.true(m(['unicorn=rainbow', '--bar'], ['--foo', '--unicorn=rainbow', '--bar']));
	t.false(m(['--foo', '--unicorn'], ['-f', '--unicorn']));
	t.false(m('unicorn', ['--foo', '--', '--unicorn']), 'don\'t match flags after terminator');
	t.false(m(['unicorn', 'unicorn=rainbow'], ['--foo', '--unicorn=rainbow', '--', '--unicorn']));
	t.false(m('unicorn', ['--foo']));
	t.false(m('u', ['-f', '-u', '-b']), 'default prefix is --');
});
