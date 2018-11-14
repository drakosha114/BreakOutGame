import {
    PaintInterface,
} from '../../interfaces';

import {
    drawCircleCanvas,
    drawRectangleCanvas,
} from '../../functions';

export abstract class DrawingProviderClass<C, T> implements PaintInterface<C,T>{
    public abstract draw(ctx: C, params: T): void;
}

export class CanvasCircleDrawingProvider<CanvasRenderingContext2D, CircleParameters> extends DrawingProviderClass<CanvasRenderingContext2D, CircleParameters>{
    draw(ctx: CanvasRenderingContext2D, params: CircleParameters) {
        // @ts-ignore
        drawCircleCanvas(ctx, params);
    }
}

export class CanvasRectangleDrawingProvider<CanvasRenderingContext2D, RectangleParameters> extends DrawingProviderClass<CanvasRenderingContext2D, RectangleParameters>{
    draw(ctx: CanvasRenderingContext2D, params: RectangleParameters) {
        // @ts-ignore
        drawRectangleCanvas(ctx, params);
    }
}