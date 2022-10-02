function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments[4]);
}

add(12, 13, 45, 89, 78);

// const products = [
//     {name: 'phone', price: 12000},
//     {name: 'laptop', price: 32000},
// ]

// products[0];
// products[1];

// const products = [15, 56, 87]
const products = {
    '0': 15,
    '1': 56,
    '2': 87
}

// let factorial = 1;
// for(let i = 5; i>=1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);

function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i-1);
}

const result = factorial(5);
/* 
    5 * factorial(4)
    5 * 4 * factorial(3)
    5 * 4 * 3 * factorial(2)
    5 * 4 * 3 * 2 * factorial(1)
    5 * 4 * 3 * 2 * 1
*/


const numbers = [45, 65, 23, 98, 19];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    // console.log(number)
}

const products = [
    {id: 1, name: 'xiami phone One night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'mac book air', price: 119000},
    {id: 4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id: 5, name: 'Dell inspiron laptop', price: 19000},
    {id: 6, name: 'Samsung Phone note 7', price: 19000},
    {id: 7, name: 'Nokia old age Phone gone', price: 19000},
    {id: 8, name: 'Phone one', price: 19000},
    {id: 8, name: 'M1 chip not cheap LapTOP', price: 19000},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);


object.js
const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'aamir'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'king khan', year: 2018}],
    act: function(){
        console.log('acting like Sakib khan');
    },
    car: {
        brand: 'tesla',
        price: 50000000,
        made: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
    }
}

// console.log(student.car);
console.log(nayok.act);
nayok.act();

// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log(sum);
// let sum = 0;
// for(let i = 5; i >= 1; i--){
//     sum = sum + i;
// }
// console.log(sum);

function sum(i){
    if( i == 1 ){
        return 1;
    }
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);

/* 
    5 + sum(4)
    5 + 4 + sum (3)
    5 + 4 + 3 + sum (2)
    5 + 4 + 3 + 2 + sum(1)
    5 + 4 + 3 + 2 + 1
*/

