var gl;
/*
     class WebGL {

        canvas: any;

        initiliazeGL() {rendering.
            var canvas = <HTMLCanvasElement>document.getElementById("GLCanvas")
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl
            // A canvas offers a context object, which consists of methods, events and so on
            // to draw onto a flat surface. The two types of contexts it offers are:
            //  context2D, and the webglcontext. The latter is used to draw by programming the Graphics
            // Processing Unit (GPU) and is much faster, offers better ")
            if (gl != null) {
                gl.clearColor(0.1, 0.6, 0.5, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                VertexSquareBuffer.initSquareBuffer(gl);
                ShaderSupport.initSimpleShader("VertexShader", "FragmentShader", gl);
                //.gl.clearRect(0, 0, canvas.width, canvas.height);
            } else {
                document.write("<b>Web GL not supported</b>")
            }
        }

        constructor() {
            this.initiliazeGL();
        }


        public drawSquare() {
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.useProgram(ShaderSupport.gSimpleShader);
            gl.enableVertexAttribArray(ShaderSupport.gShaderVertexPositionAttribute);
            // draw the square
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }

        doGLDraw() {
            this.initiliazeGL();
            this.drawSquare();
        }

        clearCanvas() {
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
    
}


window.onload = () => {
  
    var webGL = new WebGL();
    webGL.doGLDraw();
     };

*/
//# sourceMappingURL=WebGL.js.map