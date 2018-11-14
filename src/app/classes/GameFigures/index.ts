import {
    Circle,
    Rectangle,
    FigureClass,
    CanvasCircleDrawingProvider,
    CanvasCircleMovingProvider,
    CanvasRectangleDrawingProvider,
    CanvasRectangleMovingProvider,
} from "../";

import {
    RectangleParameters,
    CircleParameters,
} from "../../interfaces";

type GameFigureTypes = 'ball' | 'paddle' | 'block';

class GameCanvasFiguresFactory {

    createFigure(type: 'ball', properties: CircleParameters):Circle<CanvasRenderingContext2D, CircleParameters>;
    createFigure(type: 'paddle', properties: RectangleParameters):Rectangle<CanvasRenderingContext2D, RectangleParameters>;
    createFigure(type: 'block', properties: RectangleParameters):Rectangle<CanvasRenderingContext2D, RectangleParameters>;

    public createFigure<T>(type: GameFigureTypes, properties: T): FigureClass<CanvasRenderingContext2D, T> {

        if (type === 'ball') {
            return new Circle(
                properties,
                new CanvasCircleDrawingProvider(),
                new CanvasCircleMovingProvider()
            );
        } else if (type === 'paddle') {
            return new Rectangle(
                properties,
                new CanvasRectangleDrawingProvider(),
                new CanvasRectangleMovingProvider(),
            );
        }
        else if (type === 'block') {
            return new Rectangle(
                properties,
                new CanvasRectangleDrawingProvider()
            );
        } else {
            throw new Error('Select either a Hero or a Villain')
        }

    }

}

export const GameFiguresFactory = new GameCanvasFiguresFactory();
