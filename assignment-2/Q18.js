function toggleCase(str){
    let result="";

    for(let ch of str){
        if(ch === ch.toUpperCase())
            result += ch.toLowerCase();
        else
            result += ch.toUpperCase();
    }

    return result;
}

console.log(toggleCase("HelloWorld"));