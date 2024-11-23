//teste usando fetch

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data[2]['title']))
    .catch(error => console.error('Erro:', error));
