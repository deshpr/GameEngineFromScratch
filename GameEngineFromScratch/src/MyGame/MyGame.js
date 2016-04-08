/// <reference path="../lib/gl-matrix.d.ts" />
var MyGame = (function () {
    function MyGame(canvasID) {
        GameEngine.Core.initializeWebGL(canvasID);
        this.mShader = new SimpleShader("VertexShader", "FragmentShader");
        // clear the canvas.
        GameEngine.Core.clearCanvas([0, 0.8, 0, 1]);
        var whiteSquare = new Renderable(this.mShader);
        whiteSquare.setColor([1, 1, 1, 1]);
        var xform = mat4.create();
        mat4.identity(xform);
        // Implement translation.
        mat4.translate(xform, vec3.createFrom(0.1, 0, 0), xform);
        console.log('translated matrix = ' + xform);
        //        var scalingMatrix: Float32Array = vec3.createFrom(0.1, 0.7, 0.0);
        //       console.log('scaled  matrix = ' + scalingMatrix);
        mat4.scale(xform, vec3.createFrom(1.1, 1.0, 0.0), xform);
        mat4.rotateZ(xform, 1.5, xform);
        console.log('the scaled matrix = ' + xform);
        /*   whiteSquare.getTransform().setPosition(0.1, 0.25);
            whiteSquare.getTransform().setRotationInRadians(1.5);
            whiteSquare.getTransform().setSize(1.5, 1.5);
          //  whiteSquare.draw();
    
            var redSquare: Renderable = new Renderable(this.mShader);
            redSquare.setColor([1, 0, 0, 1]);
            redSquare.getTransform().setPosition(0.25, -0.25);
            redSquare.getTransform().setRotationInRadians(-0.85);
            redSquare.getTransform().setSize(0.4, 0.4);
            redSquare.draw();
            
    
            var topRedSquare = new Renderable(this.mShader);
            topRedSquare.setColor([1, 0, 0, 1]);
            */
        // Clear the canvas.
        /*
           var gl: WebGLRenderingContext = GameEngine.Core.getGL();
           gl.viewport(100, 60, 900, 300);
           // scissor test.
           gl.scissor(100, 60, 900, 300);
           gl.enable(gl.SCISSOR_TEST);
           GameEngine.Core.clearCanvas([0.8, 0.8, 0.8, 1]);
           gl.disable(gl.SCISSOR_TEST);
   
           // set up the
         
           //  now set up the red  square.
           var redSquare: Renderable = new Renderable(this.mShader);
           redSquare.setColor([0.8, 1, 1, 1]);
           redSquare.getTransform().setPosition(10,0);
           redSquare.getTransform().setSize(1, 1);
           redSquare.getTransform().setRotationInDegrees(0);
           console.log('view projection matrix = ' + vpMatrix);
           redSquare.draw(vpMatrix, xform);
           */
        var viewMatrix = mat4.create();
        mat4.identity(viewMatrix);
        var projMatrix = mat4.create();
        mat4.identity(projMatrix);
        // Set up the world space.
        // define the origin
        mat4.lookAt(viewMatrix, vec3.createFrom(20, 70, 10), vec3.createFrom(20, 70, 0), vec3.createFrom(0, 1, 0));
        // define the ortho matrix for projection.
        mat4.ortho(-20, 20, -5, 5, 0, 1000, projMatrix);
        var vpMatrix = mat4.create();
        // mat4.identity(vpMatrix);
        console.log('In MyGame, proj matrix = ' + projMatrix);
        console.log('In MyGame, view matrix = ' + viewMatrix);
        mat4.multiply(projMatrix, viewMatrix, vpMatrix);
        console.log('resulting matrix = ' + vpMatrix);
        var viewPortDimensions = [100, 60, 900, 300];
        var center = vec2.createFrom(20, 70);
        var worldWidth = 40;
        var camera = new Camera(center, viewPortDimensions, worldWidth);
        camera.setupViewProjection();
        var redSquare = new Renderable(this.mShader);
        redSquare.setColor([0.8, 1, 1, 1]);
        redSquare.getTransform().setPosition(10, 0);
        redSquare.getTransform().setSize(1, 1);
        redSquare.getTransform().setRotationInDegrees(0);
        console.log(' the view projection matrix  calculated to= ');
        console.log(camera.getViewProjectionMatrix());
        redSquare.draw(camera.getViewProjectionMatrix());
    }
    MyGame.prototype.initialize = function () {
    };
    return MyGame;
})();
window.onload = function () {
    new MyGame('GLCanvas');
};
//# sourceMappingURL=MyGame.js.map