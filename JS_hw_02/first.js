/**
 * 
 */
"use strict"

let user = {};
console.log(user);
console.log('------------------------');

user.name = 'Пилип';
user.surname = 'Шевченко';
console.log(user);

console.log('------------------------');
user.name = 'Сергій';
console.log(user);

delete user.name;
console.log('------------------------');
console.log(user);

