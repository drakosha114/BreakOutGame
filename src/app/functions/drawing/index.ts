import {
    CircleParameters,
    RectangleParameters,
} from '../../interfaces';

export function drawCircleCanvas (ctx: CanvasRenderingContext2D, params: CircleParameters): void {

    const { coordinates: { x, y }, r, fillColor} = params;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, false);

    // TODO: Constant for default color parameters
    ctx.fillStyle = fillColor || "green";
    ctx.fill();
    ctx.closePath();
}
export function drawRectangleCanvas (ctx: CanvasRenderingContext2D, params: RectangleParameters): void {

    const { coordinates: { x, y }, width, height, fillColor } = params;

    ctx.beginPath();
    ctx.rect(x, y, width, height);

    // TODO: дефолтный цвет для прямоуголльника
    ctx.fillStyle = fillColor || "red";
    ctx.fill();
    ctx.closePath();
}