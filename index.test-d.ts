import {expectType} from 'tsd';
import hasFlag = require('.');

expectType<boolean>(hasFlag('unicorn'));
expectType<boolean>(hasFlag('unicorn', ['--foo']));
