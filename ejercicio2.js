//2.1

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25
console.log(character) 
character.name = " Javier ";
console.log (character )
//2.2
const firstName = " Jon ";
const lastName = " Snow ";
const age = 24;
const frase = " Soy " +   firstName  +  lastName  + " tengo " + age + " años y me gustan los lobos " ;
console.log (frase) ;
//2.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
const toy3 = toy1.price + toy2.price
console.log (toy3)
//2.4
//1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000
//y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad
//basePrice más el valor de la variable globalBasePrice.

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice ;
console.log (car1 , car2)


