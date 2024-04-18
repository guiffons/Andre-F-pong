
    const pong = document.querySelector("#pong");
    const paddle1 = document.querySelector("#player1");
    const paddle2 = document.querySelector("#player2");
    const ball = document.querySelector("#ball");
   
    let pongHeight = parseInt(window.getComputedStyle(pong).getPropertyValue("height"));
    let paddleHeight = parseInt(window.getComputedStyle(paddle1).getPropertyValue("height"));
    let ballHeight = parseInt(window.getComputedStyle(ball).getPropertyValue("height"));
   
    let posPaddle1 = pongHeight / 2 - paddleHeight / 2;
    let posPaddle2 = pongHeight / 2 - paddleHeight / 2;
    let posBallX = 395;
    let posBallY = 195;
    let ballSpeedX = -2;
    let ballSpeedY = 2;

    function gameLoop() {
        posBallX += ballSpeedX;
        posBallY += ballSpeedY;}   
        function gameLoop() { posBallX += ballSpeedX; posBallY += ballSpeedY;

            // Movimentação das paletas
            paddle1.style.top = `${posPaddle1}px`;
            paddle2.style.top = `${posPaddle2}px`;
        
            // Movimentação da bola
            ball.style.left = `${posBallX}px`;
            ball.style.top = `${posBallY}px`;
        
            // Colisão com as paredes verticais
            if (posBallY <= 0 || posBallY + ballHeight >= pongHeight) {
                ballSpeedY *= -1;
            }
        
            // Colisão com as paletas
            if (posBallX <= 20 && posBallX >= 10 - ballHeight && posBallY + ballHeight >= posPaddle1 && posBallY <= posPaddle1 + paddleHeight) {
                ballSpeedX *= -1;
            }
        
            if (posBallX >= 770 - ballHeight && posBallX <= 780 && posBallY + ballHeight >= posPaddle2 && posBallY <= posPaddle2 + paddleHeight) {
                ballSpeedX *= -1;
            }
        
            // Movimentação da paleta do player 1
            document.addEventListener("keydown", function (event) {
                if (event.key === "w" && posPaddle1 >= 0) {
                    posPaddle1 += 1;
                } else if (event.key === "s" && posPaddle1 + paddleHeight <= pongHeight) {
                    posPaddle1 -= 1;
                }
            });
        
            // Movimentação automática da paleta do player 2
            if (posBallY + ballHeight / 2 > posPaddle2 + paddleHeight / 2 && posPaddle2 + paddleHeight <= pongHeight) {
                posPaddle2 += 2;
            } else if (posBallY + ballHeight / 2 < posPaddle2 + paddleHeight / 2 && posPaddle2 >= 0) {
                posPaddle2 -= 2;
            }
        
            // Chama a função gameLoop novamente a cada frame
            requestAnimationFrame(gameLoop);
        }
        gameLoop();
