import {
    DrawingProviderClass,
    MoveProviderClass,
} from '../'
import {MoveDirectory} from "../../types/Moving";

export abstract class FigureClass<C, F>{

    protected params: F;
    protected drawProvider?: DrawingProviderClass<C, F>;
    protected movieProvider?: MoveProviderClass<C, F>;

    protected constructor(
        params: F,
        DrawProvider?: DrawingProviderClass<C, F>,
        MovieProvider?: MoveProviderClass<C, F>
    ) {
        this.params = params;
        this.drawProvider = DrawProvider;
        this.movieProvider = MovieProvider;
    }

    drawFigure(ctx: C) {
        if (this.drawProvider) {
            this.drawProvider.draw(ctx, this.params);
        }
    }


    moveFigure(ctx: C, directory?: MoveDirectory) {
        if(this.movieProvider) {
            this.params = this.movieProvider.movie(ctx, this.params, directory);
        }
        return this.params
    }

}

export class Circle<C, CircleParameters> extends FigureClass<C, CircleParameters> {
    constructor(
        params: CircleParameters,
        drawProvider?: DrawingProviderClass<C, CircleParameters>,
        movieProvider?: MoveProviderClass<C, CircleParameters>
    ) {
        super(params, drawProvider, movieProvider);
    }
}


export class Rectangle<C, RectangleParameters> extends FigureClass<C, RectangleParameters>{
    constructor(
        params: RectangleParameters,
        drawProvider?: DrawingProviderClass<C, RectangleParameters>,
        movieProvider?: MoveProviderClass<C, RectangleParameters>
    ) {
        super(params, drawProvider, movieProvider);
    }
}