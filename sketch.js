let campoIdade;
let campoRomance;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoRomance = createCheckbox("Gosta de romance?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeRomance = campoRomance.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeRomance, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
//}

function geraRecomendacao(idade, gostaDeFicçãoCientifica, gostaDeAção) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Homem Aranha: De Volta Para Casa";
    } else {
      if (idade >= 12) {
        if(gostaDeMusical || gostaDeInfantil) {
          return "A Cinco Passos De Você";          
        } else{
         return "Vingadores Ultimato";
        }
      } else {
        if (gostaDeFantasia) {
          return "Enrolados";
        } else {
          return "A Bela e a Fera";
        }
      }
    }
  } else {
    if (gostaDeRomance){
      return "O Pequeno Principe";
    } else {
      return "Continencia Ao Amor";
    }
  }
}
}