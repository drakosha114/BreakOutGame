export interface PaintInterface<C,T> {
    draw(ctx: C, param: T): void;
}