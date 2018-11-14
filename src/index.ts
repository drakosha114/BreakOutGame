import 'styles/style.css';
import {fromEvent, Observable} from 'rxjs';
import {map,} from 'rxjs/operators';

import {initCanvasContext,} from './app/functions';

import {GameFiguresFactory} from './app/classes';
import {MoveDirectory} from "./app/types/Moving";

import  * as GameConfig from './config/game.config';
import {RectangleParameters} from "./app/interfaces/RectangleParameters";
// TODO: Разобраться с webpack алиасами в ts


/*

TODO: enable decorators
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}
*/

(function(){

    document.addEventListener('DOMContentLoaded', () => {
        const wrapper = document.getElementById('canvas');
        const ctx = wrapper ? initCanvasContext(wrapper, GameConfig.GAME_WRAPPER_WIDTH, GameConfig.GAME_WRAPPER_HEIGHT) : null;

        if (!ctx) {
            return;
        }

        const GameBall = GameFiguresFactory.createFigure('ball', GameConfig.GameBallParameters);
        const GamePaddle = GameFiguresFactory.createFigure('paddle', GameConfig.GamePaddleParameters);
        const GameBricksArray = GameConfig.GameBricksParameters
            .map((brick: RectangleParameters) => GameFiguresFactory.createFigure('block', brick));

        // @ts-ignore
        const $keyUpObserver: Observable<KeyboardEvent> = fromEvent(document, 'keydown');

        $keyUpObserver.pipe(
            map((event: KeyboardEvent) => {
                    return event.key;
                }
            )
        ).subscribe((code?: string) => {
            switch (code) {
                case 'ArrowLeft': {
                    GamePaddle.moveFigure(ctx, MoveDirectory.left);
                    break;
                }
                case 'ArrowRight': {
                    GamePaddle.moveFigure(ctx, MoveDirectory.right);
                    break;
                }
                default:
                    return;
            }
        });
        //const $gameStateObserver = BreakOutGame.$gameState.subscribe((state: GameState) => console.log(state));



        drawScene();
        draw();

        function draw() {
            movie();
            calculateIncidents();
            isLoose();
            // @ts-ignore
            clearCanvas(ctx);
            drawScene();
            requestAnimationFrame(draw);
        }
        draw();

        function drawScene() {
            // @ts-ignore
            GameBall.drawFigure(ctx);
            // @ts-ignore
            GamePaddle.drawFigure(ctx);

            // @ts-ignore
            GameBricksArray.forEach((Brick) => Brick.drawFigure(ctx))
        }

        function movie() {
            // @ts-ignore
            GameBall.moveFigure(ctx);
        }



        function calculateIncidents() {}
        function isLoose () {}
        function clearCanvas (ctx: CanvasRenderingContext2D): void {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
    })
}());
