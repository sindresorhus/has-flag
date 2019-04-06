import test from 'ava';
import hasFlag from '.';

test('main', t => {
	t.true(hasFlag('unicorn', ['--foo', '--unicorn', '--bar']));
	t.true(hasFlag('--unicorn', ['--foo', '--unicorn', '--bar']), 'optional prefix');
	t.true(hasFlag('unicorn=rainbow', ['--foo', '--unicorn=rainbow', '--bar']));
	t.true(hasFlag('unicorn', ['--unicorn', '--', '--foo']));
	t.false(hasFlag('unicorn', ['--foo', '--', '--unicorn']), 'don\'t match flags after terminator');
	t.false(hasFlag('unicorn', ['--foo']));
	t.true(hasFlag('-u', ['-f', '-u', '-b']));
	t.true(hasFlag('-u', ['-u', '--', '-f']));
	t.true(hasFlag('u', ['-f', '-u', '-b']));
	t.true(hasFlag('u', ['-u', '--', '-f']));
	t.false(hasFlag('f', ['-u', '--', '-f']));
});
