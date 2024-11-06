//regExp

const gmailInput = document.querySelector('#gmail_input'),
 gmailButton = document.querySelector('#gmail_button'),
 gmailResult = document.querySelector('#gmail_result');

const regExp =  /^(.+)@(gmail.com)$/
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'ERROR'
        gmailResult.style.color = 'red'
    }
}


//push mini block
const childBlock = document.querySelector('.child_block')
let counterPositionY = 0
let counterPositionX = 0

const counterBlockMini = () => {
    if(counterPositionX <= 446 && counterPositionY <= 0){
        counterPositionX++
        childBlock.style.left = counterPositionX + 'px'
        setTimeout(counterBlockMini, 0)
    }else if(counterPositionX >= 446 && counterPositionY <= 446){
        counterPositionY++
        childBlock.style.top = counterPositionY + 'px'
        setTimeout(counterBlockMini, 0)
    }
    else if(counterPositionX >= 0 && counterPositionY >= 446){
        counterPositionX--
        childBlock.style.left = counterPositionX + 'px'
        setTimeout(counterBlockMini, 0)
    }
    else if(counterPositionX <= 0 && counterPositionY >= 0){
        counterPositionY--
        childBlock.style.top = counterPositionY + 'px'
        setTimeout(counterBlockMini, 0)
    }

}
counterBlockMini()

const startButton = document.querySelector('#start');
const seconds = document.querySelector('#seconds');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');


let count = 0;

let interval

startButton.onclick = () => {
    interval = setInterval(() => {
        count++
        seconds.innerText = count
    }, 1000)
}

const stop = () => clearInterval(interval)

stopButton.onclick = () => stop()

resetButton.onclick = () => {
    stop()
    count = 0
    seconds.innerText = count
}

