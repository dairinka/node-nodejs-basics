import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, 'files');

const read = async () => {
    fs.readFile(`${srcDir}//fileToRead.txt`, 'utf8', (err, data) => {
        if(err) throw new Error('FS operation failed');
        console.log('\x1b[36m', data, '\x1b[0m');
    })
};

await read();