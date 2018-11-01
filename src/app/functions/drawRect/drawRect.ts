import { RectangleParametersInterface } from "../../interfaces/rectangle-parameters-interface";

export function drawRect (ctx: CanvasRenderingContext2D, params: RectangleParametersInterface): boolean {
    const { x, y, width, height, fillColor } = params;
    try {
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        // TODO: дефолтный цвет для прямоуголльника
        ctx.fillStyle = fillColor || "red";
        ctx.fill();
        ctx.closePath();
        return true;
    } catch (err) {
        return false;
    }
}
