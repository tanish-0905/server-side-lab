function isRegExp(val) {
    return val instanceof RegExp;
}

console.log(isRegExp(/hello/));