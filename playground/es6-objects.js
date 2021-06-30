//Object shorthand

const name='Andrew'
const age=27
const user={
    name,
    age,
    location: 'Boston'
}

console.log(user)
//Object destructuring

const product={
    label: 'Blue nb',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label=product.label
// const stock=product.stock

// const {label:productLabel, stock, price, rating=8}=product
// console.log(productLabel, rating)

const transaction=(type, {label,stock,price})=>{
    console.log(price)
}
transaction('order', product)