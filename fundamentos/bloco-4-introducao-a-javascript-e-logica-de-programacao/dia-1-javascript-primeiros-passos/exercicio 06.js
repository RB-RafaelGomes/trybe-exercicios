//Exercicio: 06.

let pecaDeXadrez = "Cavalo"

switch ( pecaDeXadrez){
    case  "Cavalo":
        console.log ("Se movimenta em L");
        break;

    case "Bispo":
        console.log("Se movimenta em diagonal");
        break;

    case "Rainha":
        console.log ("Se movimenta em todas as direções");
        break;

        default:
        console.log("Declare uma peça válida");
        break;
        
    
}