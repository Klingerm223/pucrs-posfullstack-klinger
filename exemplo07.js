let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva"); // Adiciona "uva" ao final do array
console.log(frutas);

frutas.pop(); // Remove o último elemento do array
console.log(frutas);

frutas.forEach((fruta, index) => {
    console.log(index, fruta);
});
