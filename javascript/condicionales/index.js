var x = 3;
var y = 6;
if (x>y){
  console.log("X es mayor que Y");
}else if (x==y){
  console.log("X es igual que Y");
}else {
  console.log("X es mayor que Y");
}

var dia = new Date().getDay();
console.log(dia);
switch(dia){
  case 6:
    console.log("Hoy es sábado");
    break;
  default:
    console.log("Nro de dia de la semana: ", new Date().getDay());
}
