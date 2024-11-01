class Obstacle{
    constructor(game, x)
    {
        this.game = game;
        this.spriteWidth = 200;
        this.spriteHeight = 250;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.x = x;
        this.y = Math.random() * (this.game.height - this.scaledHeight);
        this.collisionX;
        this.collisionY;
        this.collisionRadius;
        this.speedY = Math.random() < 1 ? -1 * this.game.ratio: 1 * this.game.ratio;
        this.markedForDeletion = false;
        this.image = document.getElementById('smallGears');
        //this.frameX = Math.floor(Math.random() * 4);
    }
    update()
    {
        this.x -= this.game.speed;
        this.y += this.speedY;
        this.collisionX = this.x + this.scaledWidth * 0.5;
        this.collisionY = this.y + this.scaledHeight * 0.5;
        if(!this.game.gameOver)
        {
            if(this.y <= 0 || this.y >= this.game.height - this.scaledHeight)
                {
                    this.speedY *= -1 ;
                }
                else
                {
                    this.speedY += 0.1;
                }
        }
        if(this.isOffScreen())
        {
            this.markedForDeletion = true;
            this.game.obstacles = this.game.obstacles.filter(obstacle => !obstacle.markedForDeletion)
            this.game.score++;
            if(this.game.obstacles.length <= 0)
                {
                    this.game.triggerGameOver();
                } 
        }
        if(this.game.checkCollision(this, this.game.player))
        {
            this.game.player.collided = true;
            this.game.player.stopCharge();
            this.game.triggerGameOver();
        }
    }
    draw()
    {
        this.game.ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.scaledWidth, this.scaledHeight);
        if(this.game.debug)
        {
            this.game.ctx.beginPath()
            this.game.ctx.arc(this.collisionX, this.collisionY, this.collisionRadius, 0, Math.PI * 2)
            this.game.ctx.stroke();
        }
    }
    resize()
    {
        this.scaledWidth = this.spriteWidth * this.game.ratio /3;
        this.scaledHeight = this.spriteHeight * this.game.ratio /3;
        this.collisionRadius = this.scaledWidth * 0.3;
    }
    isOffScreen()
    {
        return this.x < -this.scaledWidth || this.y > this.game.height;
    }
}


