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
            const GameBall = new Ball(ctx, {x: 150, y: 150, r: 30});
            GameBall.draw();
            
        }

    })
}());
