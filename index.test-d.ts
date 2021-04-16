import {expectType} from 'tsd';
import hasFlag from './index.js';

expectType<boolean>(hasFlag('unicorn'));
expectType<boolean>(hasFlag('unicorn', ['--foo']));
