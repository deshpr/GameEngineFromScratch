var GameEngine;
(function (GameEngine) {
    var Core;
    (function (Core) {
        var mGl;
        var gl;
        function clearCanvas(color) {
            this.mGl.clearColor(color[0], color[1], color[2], color[3]);
            this.mGl.clear(this.mGl.COLOR_BUFFER_BIT);
        }
        Core.clearCanvas = clearCanvas;
        function getGL() {
            return this.mGl;
        }
        Core.getGL = getGL;
        function initializeWebGL(canvasId) {
            var canvas = document.getElementById(canvasId);
            this.gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            if (gl != null) {
                gl.clearColor(0.1, 0.6, 0.5, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                console.log('initialized the mgl');
                this.mGl = gl;
                GameEngine.VertexBuffer.initializeBuffer();
            }
            else {
                document.write("<b>Web GL not supported</b>");
            }
        }
        Core.initializeWebGL = initializeWebGL;
    })(Core = GameEngine.Core || (GameEngine.Core = {}));
})(GameEngine || (GameEngine = {}));
//# sourceMappingURL=Engine_Core.js.map