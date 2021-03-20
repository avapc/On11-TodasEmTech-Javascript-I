/*exercicio 0
Como tirar uma foto no celular:
acessar o celular -> abrir o applicativo da camera -> apontar a camera para o que quiser fotografar -> aperte o botão de tirar a foto.
*/

//exercicio 1
let meuNome;
meuNome = "Ava Pimmel Correa";
let minhaIdade = 21;
console.log(meuNome)
meuNome = "Amanda"
console.log(meuNome,minhaIdade)


//exercicio2
let myName = 'Default';    
myName = 'Chris';

let myAge = 42;

console.log(myName);    
console.log(`In 20 years, I will be ${myAge + 20}`);

//exercicio3
let calculadora;
calculadora = 10 + 5;
console.log("A soma de 10 + 5 é igual á "+calculadora)
calculadora *= 3;
console.log("Calculadora veses 3 é igual á a "+calculadora)

//exercicio4
let precoCarro = 60
let precoKm = 0.15
let qtDias = 12
let qtKm = 320

console.log("Preço total é: "+((qtDias*precoCarro)+(qtKm*precoKm)))

qtDias = 6
qtKm = 390
console.log("Preço total é: "+((qtDias*precoCarro)+(qtKm*precoKm)))

//exercicio5
let numero1 = 1;
let numero2 = 2;
let numero3 = 3;
console.log("Media dos 3 numeros é:"+((numero1+numero2+numero3)/3))

//exercicio extra 6
let diaDaSemana = 1;
if(diaDaSemana == 1){
    console.log("Hoje é Domingo")
}
else if(diaDaSemana == 2){
    console.log("Hoje é segunda-feira")
}
else if(diaDaSemana == 3){
    console.log("Hoje é terça-feira")
}
else if(diaDaSemana == 4){
    console.log("Hoje é quarta-feira")
}
else if(diaDaSemana == 5){
    console.log("Hoje é quinta-feira")
}
else if(diaDaSemana == 6){
    console.log("Hoje é sexta-feira")
}
else{
    console.log("Hoje é sabado")
}
 //exercicio7
 let primeiroNumero = 1;
 let segundoNumero = 2;
 if(primeiroNumero>segundoNumero){
     console.log("Primeiro numero é maior!")
 }
 else if(primeiroNumero<segundoNumero){
     console.log("Segundo numero é maior!")
}
else{
    console.log("Os dois numeros sção iguais!")
}
//exercicio8
let qtJoaoTrouxe = 54;

if(qtJoaoTrouxe>50){
    console.log("O excesso é de "+(qtJoaoTrouxe-50)+" quilos e a multa é "+((qtJoaoTrouxe-50)*4)+" reais")
}