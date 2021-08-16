import { Utils } from './utils.js';
const utils = new Utils();
console.log('Validação de e-mail: ', utils.validaEmail());
console.log('Valor com desconto(%):', utils.calculaDesconto());
console.log('Juros simples: ', utils.calculaJurosSimples());
