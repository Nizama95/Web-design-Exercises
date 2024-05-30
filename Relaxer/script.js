const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breathTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breathAnimation()

function breathAnimation (){
  text.innerHTML ='Respira porcamadonna'
  container.className = 'container grow'

  setTimeout(() => {
    text.innerText = 'stai bono'

    setTimeout(() =>{
      text.innerText = 'esce fuori l\'aria'
      container.className = 'container shrink'
    }, holdTime)

  }, breathTime)
}

setInterval(breathAnimation, totalTime)
