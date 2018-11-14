import {MoveDirectory} from "../../types/Moving";

export interface MovieInterface<C,F> {
    movie(directory?: MoveDirectory): void;
    movie(ctx: C, params: F, directory?: MoveDirectory): F;
}