var opcao = prompt(
    "Escolha uma opção:\n1. Calcular BTC em Real. \n2. Dolar em Real."
  );
  
  if (opcao === "1") {
    var quantidadeDeBitcoin = prompt("Quanto de Bitcoin você deseja calcular");
    var valorBTC = parseInt(quantidadeDeBitcoin);
    var cotacaoBitcoin = 177552.36;
    var valorEmReal = valorBTC * cotacaoBitcoin;
    valorEmReal = valorEmReal.toFixed(2);
  
    var nome = prompt("Qual é o seu nome?");
    if (nome === null || nome === " ") {
      alert("Você não forneceu um nome!");
    }
    // Exibir uma saudação com o nome fornecido
    alert("Olá, " + nome + ", R$ " + valorEmReal);
  } else if (opcao === "2") {
    //calcular Dola em real
    var quantodadeDeDolar = prompt("Quanto de Dolar você Deseja calcular");
    var valorDolar = parseInt(quantodadeDeDolar);
    var cotacaoDolar = 4.87;
    var valorEmReal = valorDolar * cotacaoDolar;
    valorEmReal = valorEmReal.toFixed(2);
  
    var nome = prompt("Qual é o seu nome?");
    if (nome === null || nome === " ") {
      alert("Você não forneceu um nome!");
    }
    alert("Olá " + nome + ", o valor é R$ " + valorEmReal + ".");
  } else {
    //se escolher opção invalida
    alert("Opção Inválida");
  }