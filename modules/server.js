// const funciones = require('./functions');
// const { otraRandomNumber } = require('./functions');

// console.log('funciones: ', funciones);
// console.log(otraRandomNumber());
// console.log(typeof(funciones));

const Persona = require('./clase');
// console.log('Persona: ', Persona);
// Persona.setNombre("matias");
// console.log(Persona.saludar());
let p1 = new Persona("franco", "novello",30);
console.log('p1: ', typeof(p1));
let p2 = new Persona("matias", "gomez",20);

console.log(p1.saludar())
p1.setNombre("juan");
console.log(p1.saludar())
console.log(p2.saludar())
console.log(p2.inspeccionar())

