import { CoordinatesInterface } from '../'
export interface BaseFigureParameters {
    coordinates: CoordinatesInterface;
    fillColor?: string;
    xSpeed: number;
    ySpeed: number;
}