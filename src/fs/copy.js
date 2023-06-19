import fs, { mkdir } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.join(__dirname, 'files');
const distPath =path.join(__dirname, 'files_copy');

const copy = async () => {
  fs.readdir(srcPath, (err, files) => {
    if(err) throw new Error('FS operation failed');

    mkdir(distPath, (err) => {
      if(err) throw new Error('FS operation failed');

      files.map((fileName) => {
        return fs.copyFile(`${srcPath}//${fileName}`, `${distPath}//${fileName}`, (err) => {
            if(err) throw new Error('cann`t copy files');
            
            console.log('\x1b[32m',`${fileName} was copied successfully!`, '\x1b[0m');
        })
      })
    });    
  })
};




await copy();
