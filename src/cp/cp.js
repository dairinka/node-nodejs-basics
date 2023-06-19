import { fork } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const childProcessPath = path.join(__dirname, 'files/script.js');

const spawnChildProcess = async (args) => {
    const childProcess = fork(childProcessPath, args, { stdio : [0, 1, 2, 'ipc']});
    
    childProcess.send(args);

};

spawnChildProcess( ['someArgument1', 'someArgument2'] );
