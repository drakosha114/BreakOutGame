import {
    MoveDirectory,
} from '../../types';

import {
    CircleParameters,
    RectangleParameters,
    BaseFigureParameters,
} from '../../interfaces';

interface Params {
    width: number;
    height: number;
}

function moveFigureAllAxios<T extends BaseFigureParameters> (
    params: T,
): T  {
    params.coordinates.x += params.xSpeed;
    params.coordinates.y += params.ySpeed;
    return params;
}

function moveFigureToTop<T extends BaseFigureParameters> (
    params: T,
): T {
    params.coordinates.y += params.ySpeed;
    return params;
}

function moveFigureToBottom<T extends BaseFigureParameters> (
    params: T,
): T {
    params.coordinates.y -= params.ySpeed;
    return params;
}

function moveFigureToRight<T extends BaseFigureParameters> (
    params: T,
): T {
    params.coordinates.x += params.xSpeed;
    return params;
}

function moveFighreToLeft<T extends BaseFigureParameters> (
    params: T,
): T {
    params.coordinates.x -= params.xSpeed;
    return params;
}

function moveFigure<T extends BaseFigureParameters> (
    params: T,
    direction?: MoveDirectory,
): T {

    switch (direction) {
        case MoveDirectory.up: {
            return moveFigureToTop(params);
        }
        case MoveDirectory.down: {
            return moveFigureToBottom(params);
        }
        case MoveDirectory.left: {
            return moveFighreToLeft(params);
        }
        case MoveDirectory.right: {
            return moveFigureToRight(params);
        }
        default: {
            return moveFigureAllAxios(params);
        }
    }
}

function getGeometry (ctx: CanvasRenderingContext2D | SVGElement): Params {

    let width: number = 0;
    let height: number = 0;

    if (ctx instanceof CanvasRenderingContext2D) {
        width = ctx.canvas.width;
        height = ctx.canvas.height;
    } else if (ctx instanceof SVGElement) {
        width = ctx.clientWidth;
        height = ctx.clientHeight;
    } else {
        throw new Error('ctx param must be a Canvas context or SVG element');
    }


    return {
        width,
        height,
    }
}
function checkCircleParameters (
    wrapperGeometry: Params,
    params: CircleParameters
): CircleParameters {

    const { width, height } = wrapperGeometry;

    if (params.coordinates.x + params.r > width) {
        params.coordinates.x = width - params.r;
        params.xSpeed = -params.xSpeed;
    } else if (params.coordinates.x < 0) {
        params.coordinates.x = params.r;
        params.xSpeed = -params.xSpeed;
    }

    if (params.coordinates.y + params.r > height) {
        params.coordinates.y = height - params.r;
        params.ySpeed = -params.ySpeed;
    } else if (params.coordinates.y < 0) {
        params.coordinates.y = params.r;
        params.ySpeed = -params.ySpeed;
    }
    return params;
}

function checkRectangleParameters (
    wrapperGeometry: Params,
    params: RectangleParameters
): RectangleParameters {

    const { width, height } = wrapperGeometry;

    if (params.coordinates.x + params.width > width) {
        params.coordinates.x = width - params.width;
        params.xSpeed = -params.xSpeed;
    } else if (params.coordinates.x < 0) {
        params.coordinates.x = 0;
        params.xSpeed = -params.xSpeed;
    }

    if (params.coordinates.y + params.height > height) {
        params.coordinates.y = height - params.height;
        params.ySpeed = -params.ySpeed;
    } else if (params.coordinates.y < 0) {
        params.coordinates.y = 0;
        params.ySpeed = -params.ySpeed;
    }
    return params;
}

export function moveCircle (
    ctx: CanvasRenderingContext2D | SVGElement,
    params: CircleParameters,
    direction?: MoveDirectory
): CircleParameters {
    return checkCircleParameters(getGeometry(ctx), moveFigure(params, direction));
}

export function moveRectangle (
    ctx: CanvasRenderingContext2D | SVGElement,
    params: RectangleParameters,
    direction?: MoveDirectory
): RectangleParameters {
    return checkRectangleParameters(getGeometry(ctx), moveFigure(params,direction));
}