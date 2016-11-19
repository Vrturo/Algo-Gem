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
        var lastElement = this.storage[this.size-1];
        this.size-=1;
        return this.splice(1, lastElement);
    }

    isEmpty?(){
        return this.size < 1 ? true : false;
    }
}

let stack = new Stack();
stack.push(10);
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
stack.push(x);
let y = stack.pop();

