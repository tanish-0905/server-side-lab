let images=["img1.jpg","img2.jpg","img3.jpg"];
let index=0;

function next(){
    index=(index+1)%images.length;
    console.log("Next image:",images[index]);
}

function prev(){
    index=(index-1+images.length)%images.length;
    console.log("Previous image:",images[index]);
}