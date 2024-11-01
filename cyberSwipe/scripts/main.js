class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.baseHeight = 720;
        this.ratio = this.height / this.baseHeight;
        this.background = new Background(this);
        this.player = new Player(this);
        this.obstacles = [];
        this.numberOfObstacles = 10;
        this.gravity;
        this.speed;
        this.maxSpeed;
        this.minSpeed;
        this.score;
        this.gameOver;
        this.bottomMargin;
        this.timer;
        this.message1;
        this.message2;
        this.smallFont;
        this.largeFont;
        this.eventTimer = 0;
        this.eventInterval = 150;
        this.eventUpdate = false;
        this.touchStartX;
        this.swipeDistance = 50;
        this.debug = false;
        this.restartButton = document.getElementById('restartButton')
        this.fullScreenButton = document.getElementById('fullScreenButton');
        this.debugButton = document.getElementById('debugButton');

        this.resize(window.innerWidth, window.innerHeight);

        window.addEventListener('resize', e => {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
        });

        //mouse controls
        this.canvas.addEventListener('mousedown', e => {
            this.player.flap();
        })
        this.canvas.addEventListener('mouseup', e => {
            setTimeout(() => {
                this.player.wingsUp();
            }, 50);
        })

        //keyboard control
        window.addEventListener('keydown', e => {
            if( e.key === ' ' || e.key === 'Enter') this.player.flap();
            if( e.key === 'Shift' || e.key.toLowerCase() === 'c') this.player.startCharge();
            if( e.key.toLowerCase() === 'r') this.resize(window.innerWidth, window.innerHeight);
            if( e.key.toLowerCase() === 'f') this.toggleFullScreen();
            if( e.key.toLowerCase() === 'd') this.debug = !this.debug;
        })
        window.addEventListener('keyup', e => {
            this.player.wingsUp();
        })

        //touch controls
        this.canvas.addEventListener('touchstart', e => {

            this.touchStartX = e.changedTouches[0].pageX
        })
        this.canvas.addEventListener('touchmove', e => {
            e.preventDefault();
        })
        this.canvas.addEventListener('touchend', e => {
            if(e.changedTouches[0].pageX - this.touchStartX > this.swipeDistance)
                {
                    this.player.startCharge();
                }
                else
                {
                    this.player.flap();
                }
        })
    }
    resize(width, height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.textAlign = 'right';
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'white';
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ratio = this.height / this.baseHeight;

        this.bottomMargin = Math.floor(10 * this.ratio);
        this.smallFont = Math.ceil(20 * this.ratio);
        this.largeFont = Math.ceil(55 * this.ratio);
        this.ctx.font = this.smallFont + 'px Bungee';
        this.gravity = 0.15 * this.ratio;
        this.speed = 1.5 * this.ratio;
        this.minSpeed = this.speed;
        this.maxSpeed = this.speed * 4;
        this.background.resize();
        this.player.resize();
        this.createObstacles();
        this.obstacles.forEach(obstacle => {
            obstacle.resize();
        })
        this.score = 0;
        this.gameOver = false;
        this.timer = 0;
    }
    render(deltaTime){
        if(!this.gameOver) this.timer += deltaTime;
        this.handlePeriodicEvents(deltaTime);
        this.background.update();
        this.background.draw();
        this.drawStatusText();
        this.player.update();
        this.player.draw();
        this.obstacles.forEach(obstacle => {
            obstacle.update();
            obstacle.draw();
        })
    }
    toggleFullScreen()
    {
        if(!document.fullscreenElement)
        {
            document.documentElement.requestFullscreen();
        }
        else if(document.exitFullscreen)
        {
            document.exitFullscreen();
        }
    }
    createObstacles()
    {
        this.obstacles = []
        const firstX = this.baseHeight * this.ratio;
        const obstacleSpacing = 500 * this.ratio;
        for(let i = 0; i < this.numberOfObstacles; i++)
        {
            this.obstacles.push(new Obstacle(this, firstX + i * obstacleSpacing))
        }
    }

    //check distance between points (create a right angle triangle) d = distance
    checkCollision(a,b)
    {
        const dx = a.collisionX - b.collisionX;
        const dy = a.collisionY - b.collisionY;
        //same as math.scrt(dx*dx + dy*dy)
        const distance = Math.hypot(dx,dy);
        const sumOfRadii = a.collisionRadius + b.collisionRadius;
        return distance <= sumOfRadii;
    }
    formatTimer()
    {
        return (this.timer * 0.001).toFixed(1);
    }

    handlePeriodicEvents(deltaTime)
    {
        if(this.eventTimer < this.eventInterval)
        {
            this.eventTimer += deltaTime;
            this.eventUpdate = false;
            //console.log('time');
        }
        else
        {
            this.eventTimer = this.eventTimer % this.eventInterval;
            this.eventUpdate = true;
        }
    }
    triggerGameOver()
    {
        if(!this.gameOver)
        {
            this.gameOver = true;
            if(this.obstacles.length <= 0)
            {
                //this.sound.play(this.sound.win);
                this.message1 = 'SUCCESS!';
                this.message2 = 'Your time is ' + this.formatTimer() + 'seconds.'
            }
            else
            {
                //this.sound.play(this.sound.lose);
                this.message1 = 'Maybe next time!';
                this.message2 = 'Collision time ' + this.formatTimer() + ' seconds!';
            }
        }
    }
    drawStatusText()
    {
        this.ctx.save();
        this.ctx.fillStyle = '#FCEADE';
        this.ctx.fillText('Score: ' + this.score, this.width - this.smallFont, this.largeFont);
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Timer: ' + this.formatTimer(), this.smallFont, this.largeFont);
        if(this.gameOver)
        {

            this.ctx.textAlign = 'center';
            this.ctx.font = this.largeFont + 'px Bungee';
            this.ctx.fillText(this.message1, this.width * 0.5, this.height * 0.5 - this.largeFont, this.width)
            this.ctx.font = this.smallFont + 'px Bungee';
            this.ctx.fillText(this.message2, this.width * 0.5, this.height * 0.5 - this.smallFont, this.width)
            //this.ctx.fillText("Press 'R' to try again!", this.width * 0.5, this.height * 0.5, this.width)
        }

        this.ctx.fillStyle = 'green';
        if(this.player.energy <= this.player.minEnergy) this.ctx.fillStyle = 'red';
        //else if (this.player.energy >= this.player.maxEnergy) this.ctx.fillStyle = 'green';
        for(let i = 0; i < this.player.energy; i++)
        {
            this.ctx.fillRect(10, this.height - 10 - this.player.barSize * i, this.player.barSize * 3, this.player.barSize);
        }
        this.ctx.restore();
    }
}

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;

    const game = new Game(canvas, ctx);

    let lastTime = 0;
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.render(deltaTime);
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});