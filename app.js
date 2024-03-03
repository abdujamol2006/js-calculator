//let son = +prompt("Raqam kiriting");

//for (i = 1; i <= 10; i++) {
// console.log(`${i} * ${son} = ${i * son}`);
//}
let son1 = +prompt("1-raqamni kiriting");
let o = prompt("Matematik ishora kiriting");
let son2 = +prompt("2-raqamni kiriting");
switch (o) {
  case "+":
    console.log(son1 + son2);
    break;
  case "-":
    console.log(son1 - son2);
    break;
  case "*":
    console.log(son1 * son2);
    break;
  case "/":
    console.log(son1 / son2);
    break;
  case "%":
    console.log(son1 % son2);
    break;
  default:
    console.log(
      "Siz 1-raqam, 2-raqam yoki matematik ishorani kiritmadingiz yoki no'g'iri kiritdingiz. Iltimos qaytadan urinib ko'ring."
    );
}
