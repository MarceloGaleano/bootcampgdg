var dias = []; // Array vacío
var marcasAuto = ["Suzuki", "Mazda","Toyota","Nissan","Kia"];

console.log(marcasAuto);
console.log(marcasAuto.length);

console.log(marcasAuto[1]);
console.log(marcasAuto[3]);

console.log(marcasAuto.sort());
console.log(marcasAuto.sort().reverse());

// var numeros = [45,44,30,58,21,65,48,27];
// console.log(numeros);
// console.log(numeros.sort());
// console.log(numeros.sort().reverse());

marcasAuto.push("Ferrari");
console.log(marcasAuto);
marcasAuto.pop();
console.log(marcasAuto);
marcasAuto.shift();
console.log(marcasAuto);
