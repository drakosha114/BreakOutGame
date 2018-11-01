import 'styles/style.css';
// TODO: Разобраться с webpack алиасами в ts
import {
    initCanvasContext,
    drawCircle,
    drawRect,
} from './app/functions';

import {
    Ball,
} from './app/classes';
import {MovingBall} from "./app/classes/Ball";
import {MovingRectangle} from "./app/classes/Rectangle/Rectangle";

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
        const ctx = wrapper ? initCanvasContext(wrapper) : null;
        if (ctx) {
            drawRect(ctx, {x: 100, y: 150, width: 50, height: 50, fillColor: "#ff0000"});
            drawCircle(ctx, {x: 100, y: 100, r: 30});
            const GameBall = new MovingBall(ctx, {x: 150, y: 150, r: 30});
            const GameDeck = new MovingRectangle(ctx, {x: 10, y: 10, width: 50, height: 10, fillColor: "#ff0000"});
            GameBall.draw();
            GameDeck.draw();
            function movie() {
                //GameBall.movie();
                //GameDeck.movie();
                requestAnimationFrame(movie)
            }

            movie();
        }

    })
}());
