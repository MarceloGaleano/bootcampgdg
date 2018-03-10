// for(let i=0;i<=5;i++){
//   console.log("Ejecución N°: " +i)
// }
//
// var persona = {
//   nombre: "Juan",
//   apellido: "Pérez",
//   edad:23,
//   nombreCompleto: function(){return this.nombre+" "+this.apellido}
// }

var txt="";
var x;
var person = {fname:"John", lname:"Doe", age:25};
for (x in person){
  // console.log(x);
  // txt += person[x] + " ";
  console.log(person[x] + " ");
}
//document.getElementById("demo").innerHTML = txt;

var posts= [
  {
    titulo:"Proramación en javascript",
    texto: "JavaScript is the programming languae of HTML and the Web"
  },
  {
    titulo:"Intro a Linux",
    texto:"The Penguin is a Good Friend"
  },
  {
    titulo:"No usen Windows pirata",
    texto:"Microsoft se los agradece"
  }
];

posts.map(function(post){
console.log(post);
  var titulo = post.titulo;
  console.log(titulo);
})

posts.map(function(post){
  let texto = post.texto;
  console.log(texto);
})
