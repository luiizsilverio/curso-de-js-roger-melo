/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

const user = document.getElementById('username')
const p_user = document.createElement('p')
const p_submit = document.createElement('p')

const regex = /^[a-zA-z]{6,}$/  
const $valida = input => regex.test(input)

user.insertAdjacentElement('afterend', p_user)

const defineParagrafo = parInfo => {
  const { paragrafo, classe, texto } = parInfo
  paragrafo.textContent = texto
  paragrafo.setAttribute('class', classe)      
}

const validaInput = function(ev) {
 
  p_submit.textContent = ''

  if (!$valida(ev.target.value)){
    defineParagrafo({
      paragrafo: p_user, 
      classe: "username-help-feedback",
      texto: "O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas"
    })
    return
  }
  
  defineParagrafo({
    paragrafo: p_user, 
    classe: "username-success-feedback", 
    texto: "Username válido =)"
  })
}

user.addEventListener('input', validaInput)

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

const form = document.querySelector('form')

form.insertAdjacentElement('beforeend', p_submit)

validaForm = function(ev) {

  ev.preventDefault()
  
  if(!$valida(user.value)){
    defineParagrafo({
      paragrafo: p_submit, 
      classe: "submit-help-feedback", 
      texto: "Por favor, insira um username válido"
    })
    return    
  }
  
  defineParagrafo({
    paragrafo: p_submit, 
    classe: "submit-success-feedback", 
    texto: "Dados enviados =)"
  })
}

form.addEventListener('submit', validaForm)

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const contem = (lista, myFunc) => {
 
  for (let i = 0; i < lista.length; i++) {
    if (myFunc(lista[i])) {
      return true
    }
  }
  return false
}

console.log(contem([1, 2, 3], item => item > 2))
console.log(contem([1, 3, 5], item => item === 0))
