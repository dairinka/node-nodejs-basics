import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {

    fs.appendFile(path.join(__dirname, './files/fresh.txt'), 'I am fresh and young', {flag: 'ax'}, (err) => {
        if(err?.code === "EEXIST") throw new Error('FS operation failed');
        console.log('File fresh.txt was created!');
    })
};

await create();