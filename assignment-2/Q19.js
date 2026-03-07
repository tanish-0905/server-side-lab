function timeConvert(min){
    let hours = Math.floor(min/60);
    let minutes = min%60;

    return `${min} minutes = ${hours} hour(s) and ${minutes} minute(s).`;
}

console.log(timeConvert(200));