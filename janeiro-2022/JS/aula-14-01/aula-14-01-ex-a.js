// a. Crie uma função que receba quatro parâmetros e retorne o produto da multiplicação
// de todos eles. Utilize o spread operator para enviar os itens de um vetor como 
// parâmetros da sua função;

const arrayNumbers = [2, 3, 4, 5];

function spreadMultiplier(_p1, _p2, _p3, _p4) { return _p1 * _p2 * _p3 * _p4; }

console.log(spreadMultiplier(...arrayNumbers));