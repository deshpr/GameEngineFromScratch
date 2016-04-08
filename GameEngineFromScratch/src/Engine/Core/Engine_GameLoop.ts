module  GameEngine.GameLoop {


    var kFPS: number = 60;
    var kMPF: number = 1000 / kFPS;

    var mPreviousTime: number;
    var mElapsedTime: number;
    var mCurrentTime: number;
    var mLagTime: number;

    var mIsLoopRunning: boolean;
    

    // define the game loop

    function update(): void {
    }

    function draw(): void {

    }

    export function start(): void {
        mPreviousTime = Date.now();
        mLagTime = 0.0;
        mIsLoopRunning = true;
        
        requestAnimationFrame(function () {
            runLoop();
        });

    }

    
    function runLoop(): void {
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
    
}