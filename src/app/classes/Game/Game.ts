import {Subject} from 'rxjs';
import {GameState} from '../../types';

export class Game {

    protected static _instance: Game | null = null;

    private gameState: GameState = GameState.Menu;
    public $gameState: Subject<GameState> = new Subject();

    private _frameId: number | null = null;

    get frameId(): number | null {
        return this._frameId;
    }

    set frameId(value: number | null) {
        this._frameId = value;
    }

    constructor() {
        if (Game._instance) {
            return Game._instance;
        }
        Game._instance = this;
    }

    private setGameState(state: GameState): void {
        this.gameState = state;
        this.$gameState.next(state);
    }

    public pauseGame (): void {
        if (this._frameId) {
            window.cancelAnimationFrame(this._frameId);
            this._frameId = null;
        }
    }

    public startGame(): void {
        if (this.gameState !== GameState.Menu) {
            return;
        }
        this.setGameState(GameState.Started)
    }

    public toggleStartedGameState(): void {
        switch (this.gameState) {
            case GameState.Started:
                this.setGameState(GameState.Paused);
                break;
            case GameState.Paused:
                this.setGameState(GameState.Started);
                break;
            default:
                return;
        }
    }

    public looseGame():void {
        this.setGameState(GameState.Loose);
    }

    public winGame(): void {
        this.setGameState(GameState.Win);
    }

    public exitToMenu(): void {
        this.setGameState(GameState.Menu);
    }
}