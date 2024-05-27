// exemplo de lista encadeada

class Node {
    constructor (element) {
        this.element = element
        this.next = null;
    };
}

class LinkedList {

    constructor() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    add (newNode) {
        
        if (this.count == 0)
            this.header = this.tail =  newNode;
        else {
            this.tail.next = newNode;
            this.tail =  newNode;
        }
            
            //element.next 

        this.count++   ; 
    }

    print() {
        var aux =  this.header
        while (aux != null ){
            console.log(aux.element);
            aux = aux.next;
        }
    } 
}

var myLL =  new LinkedList () 
myLL.add(new Node(10));
myLL.add(new Node(110));
myLL.add(new Node(12));
myLL.add(new Node(130));
myLL.print();

// let no1 = new Node (10);

// let no2 = new Node (20);

// no1.next = no2

// console.log(no1);
// console.log(no2);



