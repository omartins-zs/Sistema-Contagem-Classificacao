// C# & JS

let numeroDeAlunos = 10;

let contador = 0;

while (contador <= numeroDeAlunos) {
  console.log(contador);

  if (contador == 0) {
    console.log("O número atual é ZERO");
  } else if (contador % 2 == 1) {
    //   Template string
    console.log(`O número ${contador} é IMPAR`);
  } else {
    //   Template string
    console.log(`O número ${contador} é PAR`);
  }

  contador++;
}

//  % 2 == 1 - IMPAR

//  % 2 == 0  - PAR é % 2 != 0

//  % 2 != 1 iNVERTE A COMPARAÇÃO
