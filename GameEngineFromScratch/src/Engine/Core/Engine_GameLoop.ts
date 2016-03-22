class MyGameEngine {


    kFPS: number = 60;
    kMPF: number = 1000 / this.kFPS;

    mPreviousTime: number;
    mElapsedTime: number;
    mCurrentTime: number;
    mLagTime: number;

    mIsLoopRunning: boolean;

    currentGame: this;

    // define the game loop

    update(): void {
    }

    draw(): void {

    }

    start(): void {
        this.mPreviousTime = Date.now();
        this.mLagTime = 0.0;
        this.mIsLoopRunning = true;
        var myGame = this.currentGame;
        requestAnimationFrame(function () {
            myGame.runLoop();
        });

    }

    


    runLoop(): void {
        if (this.mIsLoopRunning) {
            // Step A: Set up the call for the next animation frame.
            var  currentGame = this;
            requestAnimationFrame(function () {
                currentGame.runLoop();
            });
            // Step B: compute elapsed time since last loop was executed
            this.mCurrentTime = Date.now();
            this.mElapsedTime = this.mCurrentTime - this.mPreviousTime;
            this.mPreviousTime = this.mCurrentTime;
            this.mLagTime += this.mElapsedTime;

            if (this.mLagTime >= this.kMPF) {
                this.update();
                this.mLagTime -= this.kMPF;
            }
            this.draw();
        }
    }


}