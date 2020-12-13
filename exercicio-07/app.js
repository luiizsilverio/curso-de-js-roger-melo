/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

console.log(true, false)
console.log(!true, !false)

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo']

if (!animals.includes('leão')){
  console.log('Leão não existe no array animals.')
} else {
  console.log('Existe leão no array animals')
}

/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]
const limite = 400
let soma = 0

for (let i = 0; i < randomNumbers.length; i++){
  soma += randomNumbers[i]
  if (soma > limite) 
    break
}

if (soma > limite){
  console.log(`A soma ultrapassou 400. Até aqui, o valor atual é ${soma}`)
} else {
  console.log('A soma é', soma)
}

/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']
let frase = ''
for (let i = 0; i < sentence.length; i++){
  const word = sentence[i]
  if (word != 'certeza'){
    frase += word +' '
  }
}

console.log(frase)

/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]
let strings = []
let totBoo = 0
let i = 0

while (i < randomValues.length){
  const item = randomValues[i]
  if (typeof item === 'boolean'){
    totBoo++
  } 
  else if (typeof item === 'string'){
    strings.push(item)
    if (strings.length >= 4) break
  }
  i++
}

let texto = strings.join(', ')
let p = texto.lastIndexOf(', ')
if (p >= 0){
  texto = texto.slice(0,p) + ' e ' + texto.slice(p+2)
}

console.log(`As primeiras 4 strings são ${texto}`)
console.log(`Até que as primeiras 4 strings fossem iteradas, ${totBoo} booleans foram iterados`)
console.log(`O array foi iterado por ${i} vezes.`)

/*
  06

  - Descomente a constante abaixo atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = 'suco'
let msg = ''

switch (drinkType){
  case 'água': 
    msg = 'H2O'
    break
  case 'refrigerante':
    msg = 'Coca'
    break
  case 'suco':
    msg = 'Fruta'
    break
  default:
    msg = 'bebida desconhecida'  
}
console.log(msg)

/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/

const a = 1

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

switch (a) {
  case 0: 
    console.log(`O valor de "a" é ${a}`)
    break
  case 1:
    console.log(`O valor de "a" é ${a}`)
    break
  default:
    console.log('O valor de "a" é qualquer número, exceto 0 e 1')
}

