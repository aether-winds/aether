#!/usr/bin/env node

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const commandDir = `${dirname(fileURLToPath(import.meta.url))}/commands`;

console.log(commandDir);