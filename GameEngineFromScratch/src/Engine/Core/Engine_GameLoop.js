var MyGameEngine = (function () {
    function MyGameEngine() {
        this.kFPS = 60;
        this.kMPF = 1000 / this.kFPS;
    }
    // define the game loop
    MyGameEngine.prototype.update = function () {
    };
    MyGameEngine.prototype.draw = function () {
    };
    MyGameEngine.prototype.start = function () {
        this.mPreviousTime = Date.now();
        this.mLagTime = 0.0;
        this.mIsLoopRunning = true;
        var myGame = this.currentGame;
        requestAnimationFrame(function () {
            myGame.runLoop();
        });
    };
    MyGameEngine.prototype.runLoop = function () {
        if (this.mIsLoopRunning) {
            // Step A: Set up the call for the next animation frame.
            var currentGame = this;
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
    };
    return MyGameEngine;
})();
//# sourceMappingURL=Engine_GameLoop.js.map