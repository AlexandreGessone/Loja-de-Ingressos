let nome = prompt("Informa seu nome completo");
let jogo = prompt("Digite o tipo de jogo: IN ou DO");
let etapa = prompt("Digite a etapa do jogo SF, DT ou FI");

let ingressosPrompt = prompt("Informa a quantidade de ingressos");

let ingressos = Number(ingressosPrompt)

console.log("Nome do cliente", nome)

if(jogo === "DO") {
    let tipo = "NACIONAL"
    console.log("Tipo de jogo", tipo)

    if(etapa === "SF"){
        let etapaJogo = "SEMI-FINAL"
        console.log("ETAPA DO JOGO:", etapaJogo)
        let categoria = prompt("Informe a categoria 1, 2, 3 ou 4");
        switch(categoria) {
            case "1":
                console.log("CATEGORIA 1")
                console.log("A quantidade de ingressos é:", ingressos)
                console.log("O valor individual do ingresso é R$ 1320,00" )
                let total1 = 1320.00 * ingressos
                let convertido = total1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                console.log("O valor total dos ingressos adquiridos é: ", convertido)
                break;

            case "2":
                console.log("CATEGORIA 2")
                console.log("A quantidade de ingressos é", ingressos)
                console.log("O valor individual do ingresso é R$ 880,00" )
                let total2 = 880.00 * ingressos
                let convertido2 = total2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                console.log("O valor total dos ingressos adquiridos é: ", convertido2)
                break;

            case "3":
                console.log("CATEGORIA 3")
                console.log("A quantidade de ingressos é", ingressos)
                console.log("O valor individual do ingresso é R$ 550,00" )
                let total3 = 550.00 * ingressos
                let convertido3 = total3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                console.log("O valor total dos ingressos adquiridos é: ", convertido3)
                break;

            case "4":
                console.log("CATEGORIA 4")
                console.log("A quantidade de ingressos é", ingressos)
                console.log("O valor individual do ingresso é R$ 220,00" )
                let total4 = 220.00 * ingressos
                let convertido4 = total4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                console.log("O valor total dos ingressos adquiridos é: ", convertido4)
                break;

        }
    } if(etapa === "DT") {
        let etapaDT = "Decisão do 3o lugar"
        console.log("ETAPA DO JOGO", etapaDT)
        let categoria = prompt("Informe a categoria 1, 2, 3 ou 4");
        switch(categoria) {
            case "1":
                console.log("CATEGORIA 1")
                console.log("A quantidade de ingressos é:", ingressos)
                console.log("O valor individual do ingresso é R$ 660,00" )
                let total1 = 660.00 * ingressos
                console.log("O valor total dos ingressos adquiridos é: ", total1)
                break;

            case "2":
                console.log("CATEGORIA 2")
                console.log("A quantidade de ingressos é", ingressos)
                console.log("O valor individual do ingresso é R$ 440,00" )
                let total2 = 440.00 * ingressos
                console.log("O valor total dos ingressos adquiridos é: ", total2)
                break;

            case "3":
                console.log("CATEGORIA 3")
                console.log("A quantidade de ingressos é", ingressos)
                console.log("O valor individual do ingresso é R$ 330,00" )
                let total3 = 330.00 * ingressos
                console.log("O valor total dos ingressos adquiridos é: ", total3)
                break;

            case "4":
                console.log("CATEGORIA 4")
                console.log("A quantidade de ingressos é:", ingressos)
                console.log("O valor individual do ingresso é R$ 170,00" )
                let total4 = 170.00 * ingressos
                console.log("O valor total dos ingressos adquiridos é: ", total4)
                break;
    } 
    } if(etapa === "FI") {
        let etapaFI = "FINAL"
        console.log("ETAPA DO JOGO:", etapaFI)
        let categoria = prompt("Informe a categoria 1, 2, 3 ou 4");
        switch(categoria) {
            case "1":
                console.log("CATEGORIA 1")
                console.log("A quantidade de ingressos é:", ingressos)
                console.log("O valor individual do ingresso é R$ 1980,00" )
                let total1 = 1980.00 * ingressos
                console.log("O valor total dos ingressos adquiridos é: ", total1)
                break;
    
            case "2":
                console.log("CATEGORIA 2")
                console.log("A quantidade de ingressos é:", ingressos)
                console.log("O valor individual do ingresso é R$ 1320,00" )
                let total2 = 1320.00 * ingressos
                console.log("O valor total dos ingressos adquiridos é: ", total2)
                break;
    
            case "3":
                console.log("CATEGORIA 3")
                console.log("A quantidade de ingressos é: ", ingressos)
                console.log("O valor individual do ingresso é R$ 880,00" )
                let total3 = 880.00 * ingressos
                console.log("O valor total dos ingressos adquiridos é: ", total3)
                break;
    
            case "4":
                console.log("CATEGORIA 4")
                console.log("A quantidade de ingressos é: ", ingressos)
                console.log("O valor individual do ingresso é: R$ 330,00" )
                let total4 = 330.00 * ingressos
                console.log("O valor total dos ingressos adquiridos é: ", total4)
                break;
        }
}
}
