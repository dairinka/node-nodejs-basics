import { createGzip } from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';
const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const gzip = createGzip();
    const srcFile = fs.createReadStream(path.join(__dirname, 'files/fileToCompress.txt'));
    const distFile = fs.createWriteStream(path.join(__dirname, 'files/archive.gz'));

    pipeline(srcFile, gzip, distFile, (err) => {
        if(err) throw err;
        process.stdout.write('\x1b[32m File has been compressed!\n\x1b[0m');
    })

};

await compress();