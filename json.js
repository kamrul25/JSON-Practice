// JavaScript Object Notation (JSON);
let shop = {
    owner:'Alia Bhat',
    address:{
        street:'khuto khet voter bari',
        city:'Ranbir',
        country:'BD'
    },
    products:['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopConvertToObject = JSON.parse(shopJSON);
console.log(shopConvertToObject);