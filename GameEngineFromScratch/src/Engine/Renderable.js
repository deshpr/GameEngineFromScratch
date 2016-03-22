var Renderable = (function () {
    function Renderable(shader) {
        this.mShader = shader;
        this.mColor = [1, 1, 1, 1]; // a color.
        this.mTransform = new Transform();
    }
    Renderable.prototype.getTransform = function () {
        return this.mTransform;
    };
    Renderable.prototype.setColor = function (color) {
        this.mColor = color;
    };
    Renderable.prototype.getColor = function () {
        return this.mColor;
    };
    Renderable.prototype.draw = function (viewProjectionMatrix) {
        var gl = GameEngine.Core.getGL();
        this.mShader.activateShader(this.mColor, viewProjectionMatrix);
        this.mShader.loadMatrixTransform(this.getTransform().getXForm());
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    return Renderable;
})();
//# sourceMappingURL=Renderable.js.map