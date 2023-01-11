const btnGenerate = document.querySelector('.btn')
const passwordLength = document.querySelector('.length')
const numbers = document.querySelector('#numbers')
const lowercase = document.querySelector('#lowercase')
const uppercase = document.querySelector('#uppercase')
const symbols = document.querySelector('#symbols')
const generatedPassword = document.querySelector('.password input')
const tips = document.querySelector('.tips')

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

  tips.innerHTML = checkPasswordStrength(password)

  passwordStrengthColor()
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



const checkPasswordStrength = (password) => {
  // Initialize variables
  var strength = 0;
  var tips = "";

  // Check password length
  if (password.length < 8) {
    tips += "Make the password longer. ";
  } else {
    strength += 1;
  }

  // Check for mixed case
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
    strength += 1;
  } else {
    tips += "Use both lowercase and uppercase letters. ";
  }

  // Check for numbers
  if (password.match(/\d/)) {
    strength += 1;
  } else {
    tips += "Include at least one number. ";
  }

  // Check for special characters
  if (password.match(/[^a-zA-Z\d]/)) {
    strength += 1;
  } else {
    tips += "Include at least one special character. ";
  }

  // Return results
  if (strength < 2) {
    return "Easy to guess. " + tips;
  } else if (strength === 2) {
    return "Medium difficulty. " + tips;
  } else if (strength === 3) {
    return "Difficult. " + tips;
  } else {
    return "Extremely difficult. " + tips;
  }
}

const passwordStrengthColor = () => {
  const bars = document.querySelectorAll('.strength-bar .bar')
  
  bars.forEach((bar) => bar.style.backgroundColor = "silver")

  if(tips.innerText.includes('Easy')){
    document.querySelector('.strength-bar .bar:nth-child(1)').style.backgroundColor = "#dc3545"
  }
  else if(tips.innerText.includes('Medium')){
    document.querySelector('.strength-bar .bar:nth-child(1)').style.backgroundColor = "#ffc107"
    document.querySelector('.strength-bar .bar:nth-child(2)').style.backgroundColor = "#ffc107"
  }
  else if(tips.innerText.includes('Difficult')){
    document.querySelector('.strength-bar .bar:nth-child(1)').style.backgroundColor = "#0d6efd"
    document.querySelector('.strength-bar .bar:nth-child(2)').style.backgroundColor = "#0d6efd"
    document.querySelector('.strength-bar .bar:nth-child(3)').style.backgroundColor = "#0d6efd"
  }
  else if(tips.innerText.includes('Extremely difficult')){
    document.querySelector('.strength-bar .bar:nth-child(1)').style.backgroundColor = "#198754"
    document.querySelector('.strength-bar .bar:nth-child(2)').style.backgroundColor = "#198754"
    document.querySelector('.strength-bar .bar:nth-child(3)').style.backgroundColor = "#198754"
    document.querySelector('.strength-bar .bar:nth-child(4)').style.backgroundColor = "#198754"
  }
}