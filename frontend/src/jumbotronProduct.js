import products from './dummyProduct.js'

const randNum = Math.floor(Math.random() * products.length)
const randCategory = products[randNum];
const randKey = Object.keys(randCategory) 

const randObj = randCategory[randKey]

randObj.map(product => {
   console.log(product.price);
})