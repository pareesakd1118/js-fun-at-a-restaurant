//1------------------------------------------------------------------------
function createRestaurant(name){
var restaurantName = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  }
}
return restaurantName
}

//2------------------------------------------------------------------------

function addMenuItem(name, obj){ 
  if (name.menus.breakfast.includes(obj) === false && name.menus.lunch.includes(obj) === false && name.menus.dinner.includes(obj) === false){
 if (obj.type === "lunch") {
 return name.menus.lunch.push(obj)
} else if (obj.type === "breakfast") {
  return name.menus.breakfast.push(obj)
} else {
  return name.menus.dinner.push(obj)
}
  }
}
//3------------------------------------------------------------------------
function removeMenuItem(name, food, type){
  for (var i = 0; i < name.menus.breakfast.length; i++) {
    if (name.menus.breakfast[i].name = food) {
       var includes = true
      return `No one is eating our ${food} - it has been removed from the ${type} menu`
    }
  }
  
  if (!includes) {
    for (var i = 0; i < name.menus.lunch.length; i++) {
      if (name.menus.lunch[i].name = food) {
        includes = true
        return `No one is eating our ${food} - it has been removed from the ${type} menu`
      }
    }
  }
  
  if (!includes) {
    for (var i = 0; i < name.menus.dinner.length; i++) {
      if (name.menus.dinner[i].name = food) {
        includes = true
        return `No one is eating our ${food} - it has been removed from the ${type} menu`
      }
    }
  } 
 
     
}

//4------------------------------------------------------------------------

function checkForFood(name, foodItem) {
for (var i = 0; i < name.menus.breakfast.length; i++) {
  if (name.menus.breakfast.includes(foodItem)) {
     var includes = true
    return `Yes, we're serving ${foodItem.name} today!`
  }
}

if (!includes) {
  for (var i = 0; i < name.menus.lunch.length; i++) {
    if (name.menus.lunch.includes(foodItem)) {
      includes = true
      return `Yes, we're serving ${foodItem.name} today!`
    }
  }
}

if (!includes) {
  for (var i = 0; i < name.menus.dinner.length; i++) {
    if (name.menus.dinner.includes(foodItem)) {
      includes = true
      return `Yes, we're serving ${foodItem.name} today!`
    }
  }
} 

if (!includes) {
  return `Sorry, we aren't serving ${foodItem.name} today.`
}
}



module.exports = {
 createRestaurant, 
addMenuItem,
removeMenuItem,
 checkForFood
}