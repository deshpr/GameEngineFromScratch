class Transform {

    mPosition:Float32Array;
    mScale:Float32Array;
    mRotationInRadians:number;



    constructor() {
        this.mPosition = vec2.createFrom(0, 0);
        this.mScale = vec2.createFrom(1, 1);    // keep  as is.
        this.mRotationInRadians = 0.0;
    }

    setRotationInRadians(radians): void {
        this.mRotationInRadians = radians;
        while (this.mRotationInRadians > 2 * Math.PI) {
            this.mRotationInRadians -= (2 * Math.PI);
        }        
    }

    setX(x: number): void {
        this.mPosition[0] = x;
    }
    setY(y: number): void {
        this.mPosition[1] = y;
    }
    getX(): number {
        return this.mPosition[0];
    }

    getY(): number {
        return this.mPosition[1];
    }

    setHeight(height: number): void {
        this.mScale[1] = height;
    }
    setWidth(width: number): void {
        this.mScale[0] = width;
    }

    getWidth(): number {
        return this.mScale[0];
    }
    getHeight(): number {
        return this.mScale[1];
    }

    setRotationInDegrees(angle): void {
        this.setRotationInRadians(angle * Math.PI / 180);
    }

    setSize(width: number, height: number): void {
        this.mScale = vec2.createFrom(width, height);
    }
    getSize(): Float32Array {
        return this.mScale;
    }


    setPosition(x: number, y: number) {
        this.mPosition = vec2.createFrom(x, y);
    }

    getRotationInRadians(): number {
        return this.mRotationInRadians;
    }
    
    getXForm(): Float32Array {
        var matrix = mat4.create();
        mat4.identity(matrix);
//        mat4.translate(xform, vec3.createFrom(0.1, 0, 0), xform);
        mat4.translate(matrix, vec3.createFrom(this.getX(), this.getY(), 0.0), matrix);

      
   //     mat4.scale(xform, vec3.createFrom(1.1, 1.0, 0.0), xform);
        mat4.scale(matrix, vec3.createFrom(this.getWidth(), this.getHeight(), 1.0), matrix);
      //  mat4.rotateZ(xform, 1.5, xform);
        mat4.rotateZ(matrix, this.getRotationInRadians(), matrix);
        return matrix;
        
    }
}