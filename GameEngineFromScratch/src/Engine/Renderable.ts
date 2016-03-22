class Renderable {
    
    mShader: SimpleShader;
    mColor: number[];
    mTransform: Transform;
    
    constructor(shader: SimpleShader) {
        this.mShader = shader;
        this.mColor = [1, 1, 1, 1]; // a color.
        this.mTransform = new Transform();
    }

    getTransform(): Transform {
        return this.mTransform;
    }
    
    setColor(color: number[]) {
        this.mColor = color;
    }
    
    getColor(): number[] {
        return this.mColor;
    }

    
    draw(viewProjectionMatrix: Float32Array) {
        var gl = GameEngine.Core.getGL();
        this.mShader.activateShader(this.mColor, viewProjectionMatrix);
        this.mShader.loadMatrixTransform(this.getTransform().getXForm());
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        
    }
}