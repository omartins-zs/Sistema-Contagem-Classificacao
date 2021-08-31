// C# & JS

let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
  // console.log(contador)

  if (contador == 0) {
    console.log("O número atual é ZERO");
  } else if (contador % 2 == 0) {
    //   Concatenaçao
    console.log("O número " + contador + " é PAR");
  } else {
    //   Template string
    console.log(`O número ${contador} é IMPAR`);
  }
}