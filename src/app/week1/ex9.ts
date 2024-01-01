interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

// create list product demo include 5 products
let products: Product[] = [
    { id: 1, name: 'product 1', price: 20, quantity: 10 },
    { id: 2, name: 'product 2', price: 50, quantity: 20 },
    { id: 3, name: 'product 3', price: 100, quantity: 30 },
    { id: 4, name: 'product 4', price: 200, quantity: 40 },
    { id: 5, name: 'product 5', price: 300, quantity: 50 },
];

// Sum of total price of all products
let totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

// Filter products have price > 100
let productsPriceMoreThan100 = products.filter(product => product.price > 100);

// Use map to create array and print each product with format: Sản phẩm [name] có giá [price] đồng và còn [quantity] sản phẩm.
let productsInfo = products.map(product => `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm.`);

// Use reduce to calculate total all quantity of products has price < 100
let totalQuantity = products.reduce((total, product) => product.price < 100 ? total + product.quantity : total, 0);

// Create function getDiscountedProducts has parameter is discountPercent and return list products with price discounted
let getDiscountedProducts = (discountPercent: number) => products.map(product => {
    product.price = product.price - product.price * discountPercent / 100;
    return product;
});