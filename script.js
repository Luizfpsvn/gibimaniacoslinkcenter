const lightButton = document.querySelector('svg')
const lightFill = document.querySelector('.lightFill')
const body = document.querySelector('body')

function darkMode() {
  lightFill.classList.toggle('darkMode')
  body.classList.toggle('darkMode')
  document.querySelector('h1').classList.toggle('darkMode')
  document.querySelector('p').classList.toggle('darkMode')
  document.querySelector('footer p').classList.toggle('darkMode')
  document.querySelector('footer a').classList.toggle('darkMode')
}

lightButton.addEventListener('click', function () {
  darkMode()
})
