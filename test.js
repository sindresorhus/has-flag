import test from 'ava';
import m from '.';

test(t => {
	t.true(m('unicorn', ['--foo', '--unicorn', '--bar']));
	t.true(m('--unicorn', ['--foo', '--unicorn', '--bar']), 'optional prefix');
	t.true(m('unicorn=rainbow', ['--foo', '--unicorn=rainbow', '--bar']));
	t.true(m('unicorn', ['--unicorn', '--', '--foo']));
	t.false(m('unicorn', ['--foo', '--', '--unicorn']), 'don\'t match flags after terminator');
	t.false(m('unicorn', ['--foo']));
	t.true(m('-u', ['-f', '-u', '-b']));
	t.true(m('-u', ['-u', '--', '-f']));
	t.true(m('u', ['-f', '-u', '-b']));
	t.true(m('u', ['-u', '--', '-f']));
	t.false(m('f', ['-u', '--', '-f']));
});
