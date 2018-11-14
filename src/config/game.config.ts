import {CircleParameters} from "../app/interfaces/CircleParameters";
import {RectangleParameters} from "../app/interfaces/RectangleParameters";
const BASE_COLOR: string = '#0095DD';

export const GAME_WRAPPER_WIDTH: number = 800;
export const GAME_WRAPPER_HEIGHT: number = 500;

const BRICKS_OFFSET_HORIZONTAL: number = 10;
const BRICKS_OFFSET_VERTICAL: number = 10;
const BRICK_OFFSET: number = 10;
const BRICKS_ROWS: number = 6;
const BRICKS_COLLS: number = 5;
const BRICKS_HEIGHT: number = 20;
const BRICK_WIDTH: number = (GAME_WRAPPER_WIDTH - 2 * BRICKS_OFFSET_HORIZONTAL - (BRICKS_ROWS - 1) * BRICK_OFFSET) / BRICKS_ROWS;

const BallParameters = {
    r: 10,
    fillColor: BASE_COLOR,
    xSpeed: 2,
    ySpeed: -2,
};

const PaddleParameters = {
    width: 100,
    height: 10,
    fillColor: BASE_COLOR,
    xSpeed: 30,
    ySpeed: 0,
}

const BrickParameters = {
    fillColor: BASE_COLOR,
    xSpeed: 0,
    ySpeed: 0,
    height: BRICKS_HEIGHT,
    width: BRICK_WIDTH,
};

export const GameBallParameters: CircleParameters = {
    coordinates: {
        x: GAME_WRAPPER_WIDTH / 2,
        y: GAME_WRAPPER_HEIGHT - 50,
    },
    r: BallParameters.r,
    xSpeed: BallParameters.xSpeed,
    ySpeed: BallParameters.xSpeed,
    fillColor: BallParameters.fillColor,
}

export const GamePaddleParameters: RectangleParameters = {
    coordinates: {
        x: GAME_WRAPPER_WIDTH / 2,
        y: GAME_WRAPPER_HEIGHT - PaddleParameters.height,
    },
    width: PaddleParameters.width,
    height: PaddleParameters.height,
    xSpeed: PaddleParameters.xSpeed,
    ySpeed: PaddleParameters.ySpeed,
    fillColor: PaddleParameters.fillColor,
}

export const GameBricksParameters: Array<RectangleParameters> = (function() {
    const BricksArray = [];
    for (let col = 0; col < BRICKS_COLLS; col +=1) {
        const y = BRICKS_OFFSET_VERTICAL + col * (BRICKS_HEIGHT + BRICK_OFFSET);
        for (let row = 0; row < BRICKS_ROWS; row +=1) {
            const x = BRICKS_OFFSET_HORIZONTAL + row * (BRICK_WIDTH + BRICK_OFFSET);
            BricksArray.push({
                coordinates: {
                    x: x,
                    y: y,
                },
                fillColor: BrickParameters.fillColor,
                width: BRICK_WIDTH,
                height: BRICKS_HEIGHT,
                xSpeed: BrickParameters.xSpeed,
                ySpeed: BrickParameters.ySpeed,
            })
        }
    }
    return BricksArray;
}());