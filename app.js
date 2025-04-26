

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
    name: 'Waffle Cone',
    price: 1.25,
    quantity: 0,
    type: 'vessel'
  },
  {
    name: 'Sugar Cone',
    price: 1.25,
    quantity: 0,
    type: 'vessel'
  },
  {
    name: 'Cup',
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

function addIceCreamByName(icecreamname) {
  console.log('addicecream', icecreamname)
  for (let i = 0; i < iceCreamMenu.length; i++) {
    const itemName = iceCreamMenu[i]
    if (icecreamname == itemName.name) {
      itemName.quantity += 1
      console.log('+', i, itemName)
    }
  }
  drawOrder()
}

function addToppingByName(toppingname) {
  console.log('add topping', toppingname)
  for (let i = 0; i < iceCreamMenu.length; i++) {
    const itemName = iceCreamMenu[i]
    if (toppingname == itemName.name) {
      itemName.quantity += 1
      console.log('+', i, itemName)
    }
  }
  drawOrder()
}
function addVesselByName(vesselname) {
  console.log('add vessel', vesselname)
  for (let i = 0; i < iceCreamMenu.length; i++) {
    const itemName = iceCreamMenu[i]
    if (vesselname == itemName.name) {
      itemName.quantity += 1
      console.log('+', i, itemName)
    }
  }
  drawOrder()
}



function drawOrder() {
  const orderListElm = document.getElementById('order list')
  const totalElm = document.getElementById('Order-Total')

  let orderContent = ''

  for (let i = 0; i < iceCreamMenu.length; i++) {
    const itemName = iceCreamMenu[i]
    if (itemName.quantity > 0) {
      console.log('${item.quantity}, ${item.name}, ${(item.price * item.quantity).toFixed(2)}')
      orderContent += `<tr><td>${itemName.name}</td> <td>${itemName.quantity}</td><td>$${itemName.price}</td><td>$${itemName.price}</td><tr>`

    }
  }
  orderListElm.innerHTML = orderContent
  const orderTotal = OrderTotal();
  totalElm.innerText = orderTotal.toFixed(2)
}


function OrderTotal() {
  let total = 0
  for (let i = 0; i < iceCreamMenu.length; i++) {
    const itemName = iceCreamMenu[i]
    total += itemName.price * itemName.quantity
  }
  console.log('💵', total)
  return total
}


function CheckOut() {
  for (let i = 0; i < iceCreamMenu.length; i++) {
    const itemName = iceCreamMenu[i]
    itemName.quantity = 0
  }
  window.alert("🚀💥Enjoy your delectable goodies!")
  drawOrder()
}

