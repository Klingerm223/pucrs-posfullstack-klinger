class Queue {

    constructor () {
        this.items = []

    }
    enqueue(element) {
        this.items.push(element) 
    }

    dequeue () {
        return this.items.shift()
    }

    peek () {
        
        if (this.items.length==0) 
            return undefined
        else 
             return this.items[0]
        
    }
    isEmpty () {
        return this.items.length === 0;
    }
clear () {
    this.items = [];
}
size () {
    return this.items.length
}

}

var myQueue = new Queue ();

myQueue.enqueue(10);
console.log(myQueue.peek())

