
// 2 - extra, considerando um array que tenha os valores das vendas feitas por um vendedor durante o dia, imprima o valor da total da comissão do vendedor e se o vendedor bateu a meta.
// O código deve funcionar pra qualquer array de vendas que siga o exemplo abaixo:

// let vendas = [100, 40.3, 51.4 , 200, 49.9, 30]


// * A comissão do vendedor é 5% em cima de cada venda;
// * A meta do vendedor é de 150 reais de comissão por dia;

let vendas = [100, 40.3, 51.4 , 200, 49.9, 30]

let totalComissao = 0;

for (let index = 0; index < vendas.length; index++) {
    
        const comissao = vendas[index] * 0.05;
        
        totalComissao += vendas[index] * 0.05;

        console.log("O valor dessa comissão foi de R$" + comissao.toFixed(2))
    }

if (totalComissao >=150) {
console.log ("O valor total de comissões de hoje foi de R$" + totalComissao.toFixed(2) + ", parabéns, você conseguiu bater a meta")
}
else {
console.log ("O valor total de comissões de hoje foi de R$" + totalComissao.toFixed(2) + " e infelizmente você não conseguiu atingir a meta diária") 
}