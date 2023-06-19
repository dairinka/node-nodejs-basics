import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.join(__dirname, 'files');

const rename = async () => {
    fs.access(`${srcPath}//properFilename.md`, (err) => {
        if (!err) {
            console.error('\x1b[31m', 'FS operation failed: file properFilename.md already exist', '\x1b[37m');
            return;
        }
        fs.rename(`${srcPath}//wrongFilename.txt`, `${srcPath}//properFilename.md`, (err) => {
            if(err) throw new Error('FS operation failed: file wrongFilename.txt does not exist');
            
            console.log('\x1b[32m','file was renamed', '\x1b[0m')
    })
    })
    
};

await rename();