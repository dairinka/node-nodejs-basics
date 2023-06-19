import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);


const sendResult = () => {
    parentPort.on('message', (n) => {
        let resultToMain = {
            status: 'error',
            data: null,
        };
        if(typeof n === 'number' && n > 0) {
            resultToMain  = {
                status: 'resolved',
                data: nthFibonacci(n),
            };
            
        }        
       parentPort.postMessage(resultToMain);
    })
    
};

sendResult();