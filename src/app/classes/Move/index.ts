import { MovieInterface } from "../../interfaces";
import {
    moveCircle,
    moveRectangle,
} from '../../functions';
import {MoveDirectory} from "../../types/Moving";

export abstract class MoveProviderClass<C,F> implements MovieInterface<C,F>{

    //abstract movie(directory?: MoveDirectory): void;
    // @ts-ignore
    public abstract movie(ctx: C, params: F, directory?: MoveDirectory): F;
}

export class CanvasCircleMovingProvider<CanvasRenderingContext2D, CircleParameters> extends MoveProviderClass<CanvasRenderingContext2D, CircleParameters>{

    movie(ctx: CanvasRenderingContext2D, params: CircleParameters, directory?: MoveDirectory): CircleParameters {
        // @ts-ignore
        return moveCircle(ctx, params, directory);
    }
}

export class CanvasRectangleMovingProvider<CanvasRenderingContext2D, RectangleParameters> extends MoveProviderClass<CanvasRenderingContext2D, RectangleParameters>{
    movie(ctx: CanvasRenderingContext2D, params: RectangleParameters, directory?: MoveDirectory): RectangleParameters {
        // @ts-ignore
        return moveRectangle(ctx, params, directory);
    }
}
