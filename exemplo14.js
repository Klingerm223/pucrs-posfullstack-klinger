// exemplo de manipulacao de SET
//Retirado do https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set

var meuSet = new Set();

meuSet.add(1); // meuSet [1]
meuSet.add(5); // meuSet [1, 5]
meuSet.add(5); // 5 já foi adicionando, portanto, meuSet [1, 5]
meuSet.add("texto");
var o = { a: 1, b: 2 };
meuSet.add(o);

meuSet.add({ a: 1, b: 2 }); //  o está referenciando outro objeto

meuSet.has(1); // true
meuSet.has(3); // false, 3 não foi adicionado ao set (Conjunto)
meuSet.has(5); // true
meuSet.has(Math.sqrt(25)); // true
meuSet.has("Texto".toLowerCase()); // true
meuSet.has(o); // true

meuSet.size; // 5

meuSet.delete(5); // remove 5 do set
meuSet.has(5); // false, 5 já foi removido

meuSet.size; // 4, nós simplesmente removemos um valor

console.log(meuSet); // Set { 1, 'texto', { a: 1, b: 2 }, { a: 1, b: 2 } }


// iterar sobre os itens em set
// loga os itens na ordem: 1, "texto"
for (let item of meuSet) console.log(item);

// loga os itens na ordem: 1, "texto"
for (let item of meuSet.keys()) console.log(item);

// loga os itens na ordem: 1, "texto"
for (let item of meuSet.values()) console.log(item);

// loga os itens na ordem: 1, "texto"
//(key e value são os mesmos aqui)
for (let [key, value] of meuSet.entries()) console.log(key);

// converte Set para um Array
var meuArr = [v for (v of mySet);]; // [1, "some text"]

// o seguinte também funcionará se for executado em um documento HTML
mySet.add(document.body);
mySet.has(document.querySelector("body")); // true

// a conversão entre Set e Array
mySet2 = Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// intersecção pode ser simulado via
var intersection = new Set([...set1].filter(x => set2.has(x)));

// Iterar entradas set com forEach
meuSet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
