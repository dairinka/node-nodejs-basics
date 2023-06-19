const parseArgs = () => {
    const arg = process.argv.slice(2);
    let result = [];
    let i = 0;
    while(i < arg.length) {
        if (arg[i].startsWith('--')) {
            result.push(`${arg[i].slice(2)} is ${arg[i + 1]}`);
            i += 2;
        }
    }
    console.log('\x1b[33m', result.join(', '), '\x1b[37m');
};

parseArgs();