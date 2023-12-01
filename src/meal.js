//One

function nameMenuItem(menuItemName) {
  var menuItem1 = `Delicious ${menuItemName}`
  return menuItem1
}
//Two
//HOW DO I GET THIS FUNCTION TO TAKE THE RETURN OF PREV FUNC MENUTIEM1
function createMenuItem(menuItem1, priceValue, foodValue) {
  var menuItem = {
    name: menuItem1,
    price: priceValue,
    type: foodValue
  }
  return menuItem
}

//three 

function addIngredients(food, array){
  if (array.includes(food) === false) {
  array.push(food) }
  return array
}


//four 
function formatPrice(initialPrice){
  return `$${initialPrice}`

}

//five
function decreasePrice(initialPrice){
  return initialPrice * 0.9
}

//six 
function createRecipe(title, ingredients, type){
return recipe = {
  title: title,
  ingredients: ingredients,
  type: type
}
}

module.exports = {
  nameMenuItem,
createMenuItem,
addIngredients,
formatPrice,
decreasePrice,
createRecipe
}


