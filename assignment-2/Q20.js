class Stack{
    constructor(){
        this.items=[];
    }

    push(el){
        this.items.push(el);
    }

    contains(el){
        return this.items.includes(el);
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);

console.log(stack.contains(20));