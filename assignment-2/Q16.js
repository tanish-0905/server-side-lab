function parseURL(url){
    let obj = new URL(url);

    return {
        protocol: obj.protocol,
        host: obj.host,
        pathname: obj.pathname
    };
}

console.log(parseURL("https://example.com/page"));