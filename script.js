let userInput = 0
document.getElementById('start').addEventListener('click', PON)

function PON () {
  userInput = document.getElementById('user-number').value
  userInput = parseInt(userInput)
  if (userInput >= 0) {
    document.getElementById('answer').innerHTML = 'Positive'
  } else {
    document.getElementById('answer').innerHTML = 'Negative'
  }
}
