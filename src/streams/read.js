import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcFile = path.join(__dirname, 'files/fileToRead.txt')

const read = async () => {
    const rs = fs.createReadStream(srcFile);
    rs.on('data', (stream) => {
        process.stdout.write('\x1b[33m' + stream + '\x1b[0m', (err) => {
            if(err) throw err;
        })
    });
};

await read();