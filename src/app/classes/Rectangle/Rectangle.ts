import { Figure } from "../Figure";
import { RectangleParametersInterface } from "../../interfaces/rectangle-parameters-interface";
import { MovingFigure } from "../MovingFigure";
import { drawRect } from "../../functions";

export class Rectangle extends Figure<RectangleParametersInterface> {

    constructor(ctx:CanvasRenderingContext2D, params: RectangleParametersInterface) {
        super(ctx, params)
    }

    draw() {
        const { x, y, width, height, fillColor} = this.parameters;
        drawRect(this.ctx, {x, y, width, height, fillColor});
    }
}

export class MovingRectangle extends MovingFigure<RectangleParametersInterface> {

    constructor(ctx:CanvasRenderingContext2D, params: RectangleParametersInterface) {
        super(ctx, params)
    }

    draw() {
        const { x, y, width, height, fillColor} = this.parameters;
        drawRect(this.ctx, {x, y, width, height, fillColor});
    }

    updateCoordinates() {
        this.parameters.x += 5;
    }
}
