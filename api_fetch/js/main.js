fetch('https://api.sampleapis.com/coffee/hot')
.then(res => {
  return res.json()
}).then(data => {
  displaydata(data)
})

const coffeeList = document.querySelector('.coffees')

function displaydata(coffees) {
  
  for (const coffee of coffees) {

    if (!coffee.title) {
      continue;
    }
    const title = document.createElement('h3')
    title.textContent = coffee.title

    const description = document.createElement('p')
    description.textContent = coffee.description

    const titleIngredient = document.createElement('h4')
    titleIngredient.textContent = 'Ingredients'

    const ingredients = document.createElement('ul')
    
    coffee.ingredients.forEach(item => {
      const ingredient = document.createElement('li')
      ingredient.textContent = item 
      ingredients.appendChild(ingredient)
    })
    
    const coffeeDiv = document.createElement('div')
    coffeeDiv.appendChild(title)
    coffeeDiv.appendChild(description)
    coffeeDiv.appendChild(titleIngredient)
    coffeeDiv.appendChild(ingredients)
    
    const coffeeListItem = document.createElement('li')
    coffeeListItem.appendChild(coffeeDiv)

    coffeeList.appendChild(coffeeListItem)
  }
}