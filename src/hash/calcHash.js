import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcFile = path.join(__dirname, 'files/fileToCalculateHashFor.txt')

const calculateHash = async () => {
    fs.readFile(srcFile, (err, data) => {
        if(err) throw err;
        const hash = createHash('sha256').update(data).digest('hex');
        console.log('\x1b[36m', hash, '\x1b[0m');
    })
};

await calculateHash();