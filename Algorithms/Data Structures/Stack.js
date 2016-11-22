// build a stack
// you cannot use an array

// best oo principles
// consider that other developers will use this later

// push
// pop
// isEmpty?

class Stack{
    constructor(){
        this.storage = null;
        this.size = 0;
    }

    push(element){
        let value = {
            data: element,
            next: this.storage
        };
        this.storage = value;
        this.size+=1;
    }

    pop(){
        if(this.size < 1) return 'PUSH SOMETHING FIRST, please';
        while (this.storage.next ){
            if(!this.storage.next) this.storage = null;
            this.storage  = this.storage.next;
        }
        this.size-=1;
    }

    isEmpty(){
        return this.size < 1;
    }
}

let stack = new Stack();
let x = [{
            'name': 'info',
            'location': 'stuff'
        }, {
            'name': 'info',
            'location': 'stuff'
        }, {
            'name': 'info',
            'location': 'stuff'
        }, {
            'name': 'info',
            'location': 'stuff'
        }, {
            'name': 'info',
            'location': 'stuff'
        }];
for(var i =0; i<x.length; i++){
  stack.push(x[i]);
}

let y = stack.pop();
console.log(stack)
