import { createGunzip } from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream';
const __filename =  fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const srcFileStream = fs.createReadStream(path.join(__dirname, 'files/archive.gz'));
  const destFileStream = fs.createWriteStream(path.join(__dirname, 'files/fileToCompress.txt'));

  const unzipFile = createGunzip();
   
  pipeline(srcFileStream, unzipFile, destFileStream, (err) => {
    if(err) throw err;
    process.stdout.write('\x1b[32m Uncompressing completed!\n\x1b[0m');
  })
};

await decompress();