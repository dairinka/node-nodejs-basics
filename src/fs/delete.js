import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.join(__dirname, 'files');

const remove = async () => {
    fs.rm(`${srcPath}//fileToRemove.txt`, (err) => {
        if(err) throw new Error('FS operation failed');
        console.log('\x1b[33m', 'file was deleted', '\x1b[0m');
    })
};

await remove();