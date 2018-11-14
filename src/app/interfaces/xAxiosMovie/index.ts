export interface XAxiosMovie<C, F> {
    xMovieLeft(params: F): void;
    xMovieLeft(ctx: C, params: F): F;
    xMovieRight(params: F): void;
    xMovieRight(ctx: C, params: F): F;
}