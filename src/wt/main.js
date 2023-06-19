import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileWorker = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
    const countCores = os.availableParallelism();
    const workersArray = [];
    const promiseArray = [];

    const createWorker = ((data) => {
        return new Promise ((resolve, reject) => {
            const worker = new Worker(fileWorker);
            workersArray.push(worker);

            worker.postMessage(data);

            worker.on('message', (result) => {
                resolve(result);
            })

            worker.on('error', (err) => {
                console.log(err);
                reject(null);
            })
        })
    });

    for (let i = 0, j = 10; i < countCores; i++) {
        promiseArray.push(createWorker(j + i));
    }
    const resultPromises = await Promise.allSettled(promiseArray);
    const result = resultPromises.map(item => item.value);
    console.log(result); 

    workersArray.forEach((worker) => {
        worker.terminate(); 
      });
    
  };

await performCalculations();