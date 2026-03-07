try{
    JSON.parse("{name:'John'}");
}
catch(error){
    console.log("Invalid JSON:",error.message);
}