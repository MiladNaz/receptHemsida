function createNode(element) {
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}




const ul = document.querySelector('#recipes');

const url = 'data/data.json';

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data.recipes);
        let todos = data.recipes;

        // Returnerar json-bjekten genom att skapa en ny array med map()
        return todos.map(function(recipe) {
            let li = createNode('li');
            li.innerHTML = recipe.link + recipe.article + recipe.img + recipe.fade + recipe.stars + recipe.name + recipe.closing;
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });