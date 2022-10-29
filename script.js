let button = document.getElementById('button')
let result = document.getElementById('gameResult')
let totalScore = document.getElementById('totalScore')
let comChoice = document.getElementById('comChoice')

let resultObj = { Computer: 0, You: 0 }

const gameTime = selection => {
  let arr = ['tas', 'kagit', 'makas']
  let comSelection = randomSelection(arr)
  if (selection == 'tas') {
    if (comSelection == 'tas') {
      result.innerText = 'BERABERE'
      comChoice.innerText = `Comp->  ${comSelection} vs ${selection}  <-You`
    } else if (comSelection == 'kagit') {
      comChoice.innerText = `Comp->  ${comSelection} vs ${selection}  <-You`
      result.innerText = 'KAYBETTİN'
      resultObj.Computer++
      totalScore.innerText = `Com  ${resultObj.Computer} vs ${resultObj.You}  You`
    } else {
      comChoice.innerText = `Comp->  ${comSelection} vs ${selection}  <-You`
      result.innerText = 'KAZANDIN'
      resultObj.You++
      totalScore.innerText = `Com ${resultObj.Computer} vs ${resultObj.You}  You`
    }
  }
  if (selection == 'kagit') {
    if (comSelection == 'kagit') {
      result.innerText = 'BERABERE'
      comChoice.innerText = `Comp->  ${comSelection} vs ${selection}  <-You`
    } else if (comSelection == 'makas') {
      comChoice.innerText = `Comp->  ${comSelection} vs ${selection}  <-You`
      result.innerText = 'KAYBETTİN'
      resultObj.Computer++
      totalScore.innerText = `Com  ${resultObj.Computer} vs ${resultObj.You}  You`
    } else {
      comChoice.innerText = `Comp->  ${comSelection} vs ${selection}  <-You`
      result.innerText = 'KAZANDIN'
      resultObj.You++
      totalScore.innerText = `Com  ${resultObj.Computer} vs ${resultObj.You}  You`
    }
  }
  if (selection == 'makas') {
    if (comSelection == 'makas') {
      result.innerText = 'BERABERE'
      comChoice.innerText = `Comp->  ${comSelection} vs ${selection}  <-You`
    } else if (comSelection == 'tas') {
      comChoice.innerText = `Comp->  ${comSelection} vs ${selection}  <-You`
      result.innerText = 'KAYBETTİN'
      resultObj.Computer++
      totalScore.innerText = `Com  ${resultObj.Computer} vs ${resultObj.You}  You`
    } else {
      comChoice.innerText = `Comp->  ${comSelection} vs ${selection}  <-You`
      result.innerText = 'KAZANDIN'
      resultObj.You++
      totalScore.innerText = `Com  ${resultObj.Computer} vs ${resultObj.You}  You`
    }
  }
}

const randomSelection = arr => {
  let num = Math.floor(Math.random() * 3)
  if (num === 0) return 'tas'
  else if (num == 1) return 'kagit'
  else return 'makas'
}

resetGame = () => {
  resultObj = { Computer: 0, You: 0 }
  comChoice.innerText = '\n'
  result.innerText = 'You have resetted the game.'
  totalScore.innerText = 'Good Luck This Time!'
}
