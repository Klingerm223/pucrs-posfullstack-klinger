class noDaArvoreBinaria {

    constructor (valor) {
        this.valor = valor;
        this.pai = null;
        this.esq = null;
        this.dir = null;
    }
}

class ArvoreBinaria {

    constructor () {
        this.node = new noDaArvoreBinaria();
        this.root = null;
    }

   insert (valor) {
        if (this.root == null) {
            this.root = this.node;
            this.node.valor = valor;
        } else 
        {
            
            this.insereNode (this.root, new noDaArvoreBinaria(valor));
        }
    }


    insereNode (noAnt, novoNo) {
        if ( novoNo.valor < noAnt.valor ) {
          if (noAnt.esq === null) {
              noAnt.esq = novoNo;
          } else {
              this.insereNode (noAnt.esq, novoNo);
          }
  
        }else {
          if (noAnt.dir === null) {
              noAnt.dir = novoNo;
          }else {
              this.insereNode(noAnt.dir,novoNo);
          }
        }
        
      }
}
// var no1 = new noDaArvoreBinaria(10);
// var no2 = new noDaArvoreBinaria(9);
// var no3 = new noDaArvoreBinaria(6);
// var no4 = new noDaArvoreBinaria(5);

// no1.dir = no2;
// no1.esq = no3;

// no2.pai = no1;
// no3.pai = no1;

// no4.pai = no3;
var tree =  new ArvoreBinaria();
 tree.insert(11);
 tree.insert(15);
 tree.insert(7);
  tree.insert(13);
  tree.insert(20);
  tree.insert(5);
  tree.insert(18);


//console.log(no2.pai.dir);

console.log(tree.node);
//console.log(tree.root);



