export function initCanvasContext (element: HTMLElement, wrapperWidth: number, wrapperHeight: number): CanvasRenderingContext2D | null {

    const canvas: HTMLCanvasElement = document.createElement('canvas');

    canvas.setAttribute('width', wrapperWidth + 'px');
    canvas.setAttribute('height',  wrapperHeight + 'px');

    element.appendChild(canvas);

    return canvas.getContext('2d');

}
