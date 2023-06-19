const parseEnv = () => {
    const rssVar = Object.entries(process.env).filter(([variable, value]) => variable.startsWith('RSS'))
    const result = rssVar.map(([variable, value]) => `${variable}=${value}`);
    console.log('\x1b[33m', result.join('; '), '\x1b[37m');
};

parseEnv();