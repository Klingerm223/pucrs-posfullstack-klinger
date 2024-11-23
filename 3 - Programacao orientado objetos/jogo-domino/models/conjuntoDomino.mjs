import {PecaDomino} from './pecaDomino.mjs';

export class conjuntoDomino {
    
    constructor () {
       
       this.pecas = new Set();
       this.carrocaBranco = new PecaDomino(0,0);
       this.carrocaAs = new PecaDomino(1,1);
       this.carrocaDuque = new PecaDomino(2,2);
       this.carrocaTerno = new PecaDomino(3,3);
       this.carrocaQuadra = new PecaDomino(4,4);
       this.carrocaQuina = new PecaDomino(5,5);
       this.carrocaSena = new PecaDomino(6,6);
       this.pecas.add(this.carrocaBranco);
       this.pecas.add(this.carrocaAs);
       this.pecas.add(this.carrocaDuque);
       this.pecas.add(this.carrocaTerno);
       this.pecas.add(this.carrocaQuadra);
       this.pecas.add(this.carrocaQuina);
       this.pecas.add(this.carrocaSena);

    }


    toString() {
        var aux = '';
        this.pecas.forEach ( element => {
         aux = aux + element.ladoA + ' : '+ element.ladoB + ' , ' ;
         
       });
        
       
       return aux ;
    }
}