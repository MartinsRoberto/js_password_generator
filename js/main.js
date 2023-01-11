const btnGenerate = document.querySelector('.btn')
const passwordLength = document.querySelector('.length')
const numbers = document.querySelector('#numbers')
const lowercase = document.querySelector('#lowercase')
const uppercase = document.querySelector('#uppercase')
const symbols = document.querySelector('#symbols')
const generatedPassword = document.querySelector('.password input')

let qtdOptions = []
let password = ''

btnGenerate.addEventListener('click', () => {
  qtdOptions = []
  password = ''

  if(numbers.checked){
    qtdOptions.push('numbers')
  }
  if(lowercase.checked){
    qtdOptions.push('lowercase')
  }
  if(uppercase.checked){
    qtdOptions.push('uppercase')
  }
  if(symbols.checked){
    qtdOptions.push('symbols')
  }

  for (let index = 0; index < passwordLength.value; index++) {
    let randomNumber = Math.floor(Math.random() * qtdOptions.length)
    
    if(qtdOptions[randomNumber] == 'numbers'){
      password += getNumber()
    }
    if(qtdOptions[randomNumber] == 'lowercase'){
      password += getLowerCase()
    }
    if(qtdOptions[randomNumber] == 'uppercase'){
      password += getUpperCase()
    }
    if(qtdOptions[randomNumber] == 'symbols'){
      password += getSymbol()
    }
  }
  
  generatedPassword.value = password

})


const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
}

const getLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%&*+-";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

