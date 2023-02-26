
let score = 10;
let sNum = Math.trunc(Math.random()*100+1);
console.log(sNum);
let userInput = document.querySelector('input');
let msg = document.querySelector('.msg');
let checkBtn = document.querySelector('.checkbtn');
let currentScore = document.querySelector('.currentScore');
let resetBtn = document.querySelector('.resetbtn');
let img = document.querySelector('img');
let highScore = document.querySelector('.highScore');
let scoreBoard = document.querySelector('.scorebox');
let guessBtn = document.querySelector('guessbtn');
let gameState = 'play';

resetBtn.addEventListener('click', function() {
    sNum = Math.trunc(Math.random()*100+1);
    window.location.reload();
})

function check() {
    if (gameState == 'play') {

        if (!Number(userInput.value)) {
            msg.textContent = 'Invalid value! Numbers only (1-100)!';
        }
        else if (Number(userInput.value) == sNum) {
            gameState = 'win'
            check();
        }
        else {
            score -= 1;
            currentScore.textContent = score;

            if (Number(userInput.value) < sNum) {
                msg.textContent = 'Your number is low';
            }
            else if (Number(userInput.value) > sNum) {
                msg.textContent = 'Your number is high';
            }
            if (score == 0) {
                gameState = 'fail';
                check();
            }
        }
    }
    else if (gameState == 'start') {
        score = 10;
        document.body.style.backgroundColor = 'rgb(208, 241, 248)';
        document.querySelector('.mainbox').style.backgroundColor = 'rgb(173, 218, 227)';
        document.querySelector('.bigbox').style.backgroundColor = 'rgb(191, 230, 191)';
        msg.style.color = 'white';
        sNum = Math.trunc(Math.random()*100+1);
        console.log(sNum);
        currentScore.textContent = score;
        msg.textContent = 'Guess a Number';
        scoreBoard.className = 'scorebox';
        resetBtn.className = 'resetbtn';
        checkBtn.textContent = 'Check';
        $("#imgid").attr("src", "duck.png");
        gameState = 'play';
    }
    else if (gameState == 'win') {
        msg.textContent = `Congrats! You win! My secret number is ${sNum}. Your score is ${score}!`;
        document.querySelector('.mainbox').style.backgroundColor = 'lavender';
        document.querySelector('.bigbox').style.backgroundColor = 'lavenderblush';
        msg.style.color = 'plum';
        $("#imgid").attr("src", "anya.png");
        highScore.textContent = Math.max(highScore.textContent, score);
        scoreBoard.className = 'scorebox hide';
        resetBtn.className = 'resetbtn hide';
        checkBtn.textContent = 'Play Again';
        gameState = 'start';
    }
    else if (gameState == 'fail'){
        currentScore.textContent = score;
        msg.textContent = `Sorry, the game is over. Don't give up and try again! My secret number was ${sNum}.`;
        document.querySelector('.mainbox').style.backgroundColor = 'rgb(247,202,201)';
        document.querySelector('.bigbox').style.backgroundColor = 'rgb(255,255,240)';
        msg.style.color = 'rgb(255,3,62)';
        $("#imgid").attr("src", "duck2.png");
        resetBtn.className = 'resetbtn hide';
        userInput.value = '';
        checkBtn.textContent = 'Try Again';
        gameState = 'start';
        score = 10;
        
    }
}

checkBtn.addEventListener('click', check);

