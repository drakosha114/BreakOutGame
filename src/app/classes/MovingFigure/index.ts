import { Figure } from "../Figure";

export abstract class MovingFigure<C> extends Figure<C>{
    constructor(protected ctx:CanvasRenderingContext2D, params: C) {
        super(ctx, params);
    }

    protected abstract updateCoordinates(): void;

    public movie(): void {
        this.updateCoordinates();
        this.draw();
    };
}
