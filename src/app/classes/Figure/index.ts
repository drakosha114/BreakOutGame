export abstract class Figure<C> {
    protected parameters: C;

    constructor (protected ctx:CanvasRenderingContext2D, params: C) {
        this.parameters = params;
    }

    public abstract draw(): void;
}
