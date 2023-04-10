function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  // Obtenha os elementos de peso e altura
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  // Cálculo simultâneo ao inserir valores nos inputs
  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
}

function handleButtonClick(){
  // Obtenha os elementos de peso e altura
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  // Obtenha o elemento que irá mostrar o resultado do IMC
  var imcResult = document.querySelector('#imc-result');

  // Resultado do cálculo de IMC formatado com no máximo duas casas decimais depois da vírgula e realizada a troca do ponto pela vírgula
  imcResult.textContent = calculateImc(inputWeight.value, inputHeight.value).toFixed(2).replace('.', ',');
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

start();
