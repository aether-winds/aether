#!/usr/bin/env node

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import getArgs from 'yargs/yargs';

const commandDir = `${dirname(fileURLToPath(import.meta.url))}/commands`;
const args = getArgs(process.argv.slice(2));

args
    .commandDir(commandDir, { extensions: ['cjs'] })
    .demandCommand(1, `Missing command for ae cli.`)
    .alias('h', 'help')
    .alias('v', 'version')
    .help()
    .parseAsync();