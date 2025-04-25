

const iceCreamMenu = [
  {
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0,
    type: 'scoop'
  },
  {
    name: 'Vanilla',
    price: 1,
    quantity: 0,
    type: 'scoop'
  },
  {
    name: 'Strawberry',
    price: 1.25,
    quantity: 0,
    type: 'scoop'
  },
  {
    Name: 'Waffle Cone',
    price: 1.25,
    quantity: 0,
    type: 'vessel'
  },
  {
    Name: 'Sugar Cone',
    price: 1.25,
    quantity: 0,
    type: 'vessel'
  },
  {
    Name: 'Cup',
    price: 1.50,
    quantity: 0,
    type: 'vessel'
  },
  {
    name: 'Sprinkles',
    price: 0.25,
    quantity: 0,
    type: 'topping'
  },
  {
    name: 'Chocolate Chips',
    price: 0.25,
    quantity: 0,
    type: 'topping'
  },
  {
    name: 'Cookie Chunks',
    price: 0.50,
    quantity: 0,
    type: 'topping'
  }
]

function OrderVanilla() {
  iceCreamMenu[1].quantity += 1
  console.log('ordering vanilla and not salmonella', iceCreamMenu[1])
}

function OrderWaffleCone() {
  iceCreamMenu[3].quantity += 1
  console.log('ordering the waffle', iceCreamMenu[3])

}

function OrderSprinkles() {
  iceCreamMenu[6].quantity += 1
  console.log('ordering Sprinkles', iceCreamMenu[6])
}


function orderItem(itemName) {
  iceCreamMenu[0].quantity += 1
  console.log(itemName)
}




function OrderIcecream(itemName) {
  const OrderIcecream = iceCreamMenu.find(icecream => icecream.Name)
  OrderIcecream.quantity++
  console.log(itemName)
  drawOrder()
}

function drawTopping() {
  const itemName = iceCreamMenu.find(topping => topping.name)
  itemName.quantity++
  drawOrder()
}

function drawVessel() {
  const OrderVessel = iceCreamMenu.find(vessel => vessel.Name)
  OrderVessel.quantity++
  drawOrder()
}

function drawOrder() {

}

function totalOrder() {
  let total = 0
  for (let i = 0; i < iceCreamMenu.length; i++) {

  }
}


