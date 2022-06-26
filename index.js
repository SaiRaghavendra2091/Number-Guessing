
const actualNumber = Math.trunc(Math.random() * 100) + 1
let guesses = 10
let flag = true
const submitGuess = () => {
    let numberGuessed = document.querySelector('#innerTextBox').value
    // checkEquality(numberGuessed)
    // console.log(actualNumber)
    if(!guesses){
        document.getElementById('newgame1').innerText = 'You have lost! Guessed number is : '+ actualNumber
        return
    }
    if(!flag){
        return
    }
    else if(numberGuessed < actualNumber){
        document.getElementById('response1').innerText = 'The Entered Number is Too Low'
        document.getElementById('response1').style.cssText = 'background-color: brown; color: white; font-size: 1.5em '
        document.getElementById('previous1').innerText += `${numberGuessed}` + ', '
        document.getElementById('remaining1').innerText = --guesses;
        if(!guesses){
            document.getElementById('newgame1').innerText = 'You have lost! Guessed number is : '+ actualNumber
            document.getElementById('newgame1').style.cssText = 'background-color: brown; color: white; font-size: 2em'
            return
        }
        return
    }
    else if(numberGuessed > actualNumber){
        document.getElementById('response1').innerText = 'The Entered Number is Too High'
        document.getElementById('response1').style.cssText = 'background-color: brown; color: white; font-size: 1.5em'
        document.getElementById('previous1').innerText += numberGuessed + ', '
        document.getElementById('remaining1').innerText = --guesses;
        if(!guesses){
            document.getElementById('newgame1').innerText = 'You have lost! Guessed number is : '+ actualNumber
            document.getElementById('newgame1').style.cssText = 'background-color: brown; color: white; font-size: 2em'
            return
        }
        return
    }
    else{
        document.getElementById('response1').innerText = 'Guessed number is correct! You Won'
        document.getElementById('response1').style.cssText = 'font-size: 2em; background-color: brown; color: white'
        // document.getElementById('newgame1').innerText = 'Start New Game'
        // document.getElementById('newGame1').innerHTML.style.display = 'inline'
        flag = false
        return
    }
}
// const checkEquality = (numberGuessed) => {
//     if(numberGuessed < actualNumber)
//         console.log('Actual number is greater')
//     else if(numberGuessed > actualNumber)
//         console.log('Actual number is lower')
//     else
//         console.log('great! You are won')
// }
function myFunction(){
    location.reload();
}