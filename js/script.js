const mario = document.querySelector('.mario');
const background = document.querySelector('.background')

let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
           jump();
        }       
    }
}

function jump() {
    
    isJumping = true;
    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                   position -= 20;
                   mario.style.bottom = position + 'px';     
                }              
            }, 20);
        } else {
            position += 20;
            mario.style.bottom = position + 'px';
        }
    }, 20)
}

function createTortuga(){
    const tortuga = document.createElement('div');
    let tortugaPosition = 1000;
    let randonTime = Math.random() * 6000;

    tortuga.classList.add('tortuga');
    tortuga.style.left = 1000 + 'px';
    background.appendChild(tortuga);

    let leftInterval = setInterval(() => {

        if (tortugaPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(tortuga);
        } else if (tortugaPosition > 0 && tortugaPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';
        } else {    
           tortugaPosition -= 10;
           tortuga.style.left = tortugaPosition + 'px';
        }
    }, 20);

    setTimeout(createTortuga, randonTime);
}

createTortuga();
document.addEventListener('keyup', handleKeyUp);