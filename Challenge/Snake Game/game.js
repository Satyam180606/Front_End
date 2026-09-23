import { Snake } from './snake.js';

export class Game {

    constructor() {

        this.rows = 20;

        this.columns = 20;

        this.snake = new Snake();
        this.speed = 150;
        this.direction = "RIGHT";
        this.nextDirection = "RIGHT";
        
        this.running = true;
    }
   
}