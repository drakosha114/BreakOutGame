import { CircleParametersInterface } from '../../interfaces';
export function drawCircle (ctx: CanvasRenderingContext2D, params: CircleParametersInterface): boolean {
    const { x, y, r, fillColor} = params;
    try {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI*2, false);

        // TODO: Constant for default color parameters
        ctx.fillStyle = fillColor || "green";
        ctx.fill();
        ctx.closePath();
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }

}
