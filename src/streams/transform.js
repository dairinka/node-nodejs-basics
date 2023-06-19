import { Transform } from 'stream';

process.stdout.write('\x1b[32m Try to write something here, if you want to exit, type: exit \x1b[0m\n')
const transform = async () => {
   const reverseData = new Transform({
        transform(chunk, encoding, cb) {
            const reverseChunk = chunk.toString().split('').reverse().join('');
            this.push(reverseChunk);
            cb();
        }
   })
   process.stdin.on('data', (data) => {
    if(data.toString().trim().toLowerCase() === 'exit') {
        process.stdin.pause();
        reverseData.end();
        return;
    }
    reverseData.write(data);
   })
   process.stdin.on('end', () => {
    reverseData.end();
   })
   reverseData.on('data', (chunk) => {
    process.stdout.write(chunk + '\n');
   })
};

await transform();