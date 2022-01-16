// a. Crie uma função que receba quatro parâmetros e retorne o produto da multiplicação
// de todos eles. Utilize o spread operator para enviar os itens de um vetor como 
// parâmetros da sua função;

const arrayNumbers = [2, 3, 4, 5];

function spreadMultiplier(p1, p2, p3, p4) { return p1 * p2 * p3 * p4; }

console.log(spreadMultiplier(...arrayNumbers));