var GameEngine;
(function (GameEngine) {
    var GameLoop;
    (function (GameLoop) {
        var kFPS = 60;
        var kMPF = 1000 / kFPS;
        var mPreviousTime;
        var mElapsedTime;
        var mCurrentTime;
        var mLagTime;
        var mIsLoopRunning;
        // define the game loop
        function update() {
        }
        function draw() {
        }
        function start() {
            mPreviousTime = Date.now();
            mLagTime = 0.0;
            mIsLoopRunning = true;
            requestAnimationFrame(function () {
                runLoop();
            });
        }
        GameLoop.start = start;
        function runLoop() {
            if (this.mIsLoopRunning) {
                // Step A: Set up the call for the next animation frame.
                requestAnimationFrame(function () {
                    runLoop();
                });
                // Step B: compute elapsed time since last loop was executed
                this.mCurrentTime = Date.now();
                this.mElapsedTime = this.mCurrentTime - this.mPreviousTime;
                this.mPreviousTime = this.mCurrentTime;
                this.mLagTime += this.mElapsedTime;
                if (this.mLagTime >= this.kMPF) {
                    this.update();
                    this.mLagTime -= this.kMPF; // catch up...
                }
                this.draw();
            }
        }
    })(GameLoop = GameEngine.GameLoop || (GameEngine.GameLoop = {}));
})(GameEngine || (GameEngine = {}));
//# sourceMappingURL=Engine_GameLoop.js.map