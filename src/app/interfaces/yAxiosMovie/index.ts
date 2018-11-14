export interface YAxiosMovie<C, F> {
    yMovieTop(params: F): void;
    yMovieTop(ctx: C, params: F): void;
    yMovieBottom(params: F): void;
    yMovieBottom(ctx: F, params: F): void;
}