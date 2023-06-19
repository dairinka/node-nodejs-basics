import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.join(__dirname, 'files');

const list = async () => {
    fs.readdir(srcPath, (err, files) => {
        if(err) throw new Error('FS operation failed');

        files.forEach((fileName) => {
            console.log('\x1b[32m', fileName, '\x1b[0m');
        })
    })
};

await list();