﻿class SimpleShader {

   mCompiledShader: any;
   mShaderVertexPositionAttribute: any;
   mPixelColor: number[];
   mModelTransform: Float32Array;
   mViewProjectionTransform: Float32Array;
   

   public activateShader(pixelColor: number[], viewProjectionTransform: any): void {
       var gl = GameEngine.Core.getGL();
       gl.useProgram(this.mCompiledShader);
       gl.uniformMatrix4fv(this.mViewProjectionTransform, false, viewProjectionTransform);
       gl.enableVertexAttribArray(this.mShaderVertexPositionAttribute);
       gl.uniform4fv(this.mPixelColor, pixelColor);      
   }
    

   private  activateViewProjectionMatrix(viewProjectionMatrixTransform: any) : void {
       var gl = GameEngine.Core.getGL();
       gl.uniformMatrix4fv(this.mViewProjectionTransform, false, viewProjectionMatrixTransform);
       console.log('loaded the object transform');
    }
   
    
   public getShader(): any {
       return this.mCompiledShader;
   }

   constructor(vertexShaderId: string, fragmentShaderId: string) {
       var gl = GameEngine.Core.getGL();
        var vertexShader = this.loadAndCompileShader(vertexShaderId, gl.VERTEX_SHADER);
        var fragmentShader = this.loadAndCompileShader(fragmentShaderId, gl.FRAGMENT_SHADER);
        // create the shader program.
      
        this.mCompiledShader = gl.createProgram();
        gl.attachShader(this.mCompiledShader, vertexShader);
        gl.attachShader(this.mCompiledShader, fragmentShader);
        gl.linkProgram(this.mCompiledShader);

        if (!gl.getProgramParameter(this.mCompiledShader, gl.LINK_STATUS)) {
            alert("Error linking the  shader!");
        }
        
        
        this.mShaderVertexPositionAttribute = gl.getAttribLocation(this.mCompiledShader, "aSquareVertexPosition")
        this.mModelTransform = gl.getUniformLocation(this.mCompiledShader, "uModelTransform");
        this.mViewProjectionTransform = gl.getUniformLocation(this.mCompiledShader, "uViewProjectionTransform");

        gl.bindBuffer(gl.ARRAY_BUFFER, GameEngine.VertexBuffer.getGLVertexReference());
        gl.vertexAttribPointer(this.mShaderVertexPositionAttribute,
            3,
            gl.FLOAT,
            false,
            0, 0);
        // obtain a reference to the mPixel attribute.
        this.mPixelColor = gl.getUniformLocation(this.mCompiledShader, "uPixelColor");
        
   }


   public loadObjectTransform(transformMatrix: any): void {
       var gl = GameEngine.Core.getGL();
       gl.uniformMatrix4fv(this.mModelTransform, false, transformMatrix);
       console.log('loaded the object transform');

   }

   public loadMatrixTransform(matrixTransform: Float32Array) {
       var gl = GameEngine.Core.getGL();
       console.log('the final operator = ' + matrixTransform);
       gl.uniformMatrix4fv(this.mModelTransform, false, matrixTransform);
       console.log('the resulting operator = ' + this.mModelTransform);
    
    }

    public loadAndCompileShader(id, shaderType) {
        var shaderText, shaderSource, compileShader;
        // obtain the shader source from index.h tml
        shaderText = document.getElementById(id)
        shaderSource = shaderText.firstChild.textContent;

        compileShader = gl.createShader(shaderType);
        // compile the created shader
        gl.shaderSource(compileShader, shaderSource);
        gl.compileShader(compileShader);

        if (!gl.getShaderParameter(compileShader, gl.COMPILE_STATUS)) {
            alert("A shader compiler error occurred " + gl.getShaderInfoLog(compileShader));
        }
        return compileShader;
    }

}