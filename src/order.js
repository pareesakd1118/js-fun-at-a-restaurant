//1------------------------------------------------------------------
function takeOrder(orderNum, array){
  if (array.includes(orderNum) === false && array.length < 3) {
    array.push(orderNum) }
    return array
}
//2------------------------------------------------------------------
function refundOrder(orderNum, array){
  for (var i = 0; i < array.length; i++) {
    if (array[i].orderNumber === orderNum) {
      array.splice(i,1)
    }
  }
}
//3----------------------------------------------------------------------

function listItems(array){
  var listItems = []
  for (var i = 0; i < array.length; i++){
    listItems.push(array[i].item)

  }
return listItems.join(", ")
}

//4----------------------------------------------------------------------

function searchOrder(array, item){
  for (var i = 0; i < array.length; i++) {
    if (array[i].item === item) {
      return true
}  
  }
  return false
}

module.exports = {
takeOrder,
refundOrder,
listItems,
searchOrder
}