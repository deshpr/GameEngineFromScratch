module GameEngine.Core {


    var mGl: WebGLRenderingContext;
    var gl: WebGLRenderingContext;
    
    export function clearCanvas(color: any) {
        this.mGl.clearColor(color[0], color[1], color[2], color[3]);
        this.mGl.clear(this.mGl.COLOR_BUFFER_BIT);

    }
    export  function getGL(){
        return this.mGl;
    }


    export function initializeWebGL(canvasId:string) {
        var canvas = <HTMLCanvasElement>document.getElementById(canvasId);
        this.gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
       
        if (gl != null) {
            gl.clearColor(0.1, 0.6, 0.5, 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            console.log('initialized the mgl');
            this.mGl = gl;
            GameEngine.VertexBuffer.initializeBuffer();
        } else {
            document.write("<b>Web GL not supported</b>")
        }
       

    }
}