

const iceCreamFlavors = [
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
]


const vessels = [
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
  }
]

const toppings = [
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


function addIceCream() {
  iceCreamFlavors[0].quantity += 1
  console.log('added icecream', iceCreamFlavors[0])

}

function addToppings() {
  toppings[0].quantity += 1
  console.log('added toppings', toppings[0])

}

function addVessels() {
  vessels[0].quantity += 1
  console.log('adding vessels', vessels[0])
}



function orderVanilla() {
  iceCreamFlavors
  console.log('ordering vanilla, not samonilla')

}