export class Snake {
    constructor() {
        this.body = [
            { x: 10, y: 10 },
            { x: 9,y: 10 },
            { x: 8, y: 10 },
        ];
    }
    getHead() {
        return this.body[0];
    }
    move(newhead) {
        return this.body.unshift(newhead);
    }
    removeTail() {
        return this.body.pop();
    }
    grow(newhead) {
        this.body.unshift(newhead);
    }
    getBody() {
        return this.body;
    }
}