var library = [
 { author:'Bill Gates', title:'The Road Ahead', readingStatus:true },
 { author:'Steve Jobs', title:'Biography', readingStatus:true },
 { author:'Suzanne Collins', title:'Mockingjay', readingStatus:false }
];

library.forEach(book => {
    console.log(book.title + " - " + book.readingStatus);
});