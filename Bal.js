class Bal {
    this.x;
    this.y;
    speedX;
    speedY;

    // object georienteerd programeren
    constructor(_x, _y){
        this.x = _x;
        this.y = _y;

        speedX = 3;
        speedY = -2;

        show(){
            fill(255, 230, 230);
            ellipse(this.x, this.y, 50, 50);
        }

        update(){
            this.x = this.x + this.speedX;
            this.y = this.y + this.speedy;

            if(this.x <= 0 || this.x >= 1280){
                this.speedX = this.speedX * -1;
            }

            if(this.y <= 0 || this.x >= 720){
                this.speedY = this.speedY * -1;
            }
        }
    }
}