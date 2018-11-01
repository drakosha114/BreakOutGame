import { Figure } from '../Figure'
import { CircleParametersInterface } from '../../interfaces';
import { drawCircle } from '../../functions';
import { MovingFigure } from "../MovingFigure";

export class Ball extends Figure<CircleParametersInterface> {

    constructor(ctx:CanvasRenderingContext2D, params: CircleParametersInterface) {
        super(ctx, params);
    }

    draw() {
        const { x, r, y, fillColor} = this.parameters;
        drawCircle(this.ctx, {x, y, r, fillColor});
    }
}

export class MovingBall extends MovingFigure<CircleParametersInterface> {

    constructor(protected ctx:CanvasRenderingContext2D, params: CircleParametersInterface) {
        super(ctx, params);
    }

    draw() {
        const { x, r, y, fillColor} = this.parameters;
        drawCircle(this.ctx, {x, y, r, fillColor});
    }

    updateCoordinates() {
        this.parameters.x += 5;
        this.parameters.y +=5;
    }
}
