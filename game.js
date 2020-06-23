import { update as updateSanke, draw as drawSanke, SNAKE_SPEED, getSnakeHead, snakeIntersection, } from './snake.js'
import { update as updatefood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if (gameOver) {
        if (confirm('You Lost. Press Ok To Restart')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < (1 / SNAKE_SPEED)) return

    lastRenderTime = currentTime
    update()
    draw()
}
window.requestAnimationFrame(main)

function update() {
    updateSanke()
    updatefood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSanke(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}



