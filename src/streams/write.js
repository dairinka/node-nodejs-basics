import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distFile = path.join(__dirname, 'files/fileToWrite.txt');

const write = async () => {
    const ws = fs.createWriteStream(distFile);
    let inputData = '';
    const keyWord = 'exit';

    process.stdout.write('\x1b[32m Now you can write something in the console\n\x1b[33m to exit the stream, type: exit \n \x1b[0m' );

    process.stdin.on('data', (stream) => {
        inputData = stream.toString().trim().toLowerCase();
        if(inputData === 'exit') {
            process.stdin.pause();
            ws.end();
        } else {
            ws.write(stream, (err) => {
                if (err) throw err;
            })
        }
    })
};

await write();