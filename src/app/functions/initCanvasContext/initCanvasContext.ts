export function initCanvasContext (element: HTMLElement): CanvasRenderingContext2D | null {

    const canvas: HTMLCanvasElement = document.createElement('canvas');

    canvas.setAttribute('width', element.offsetWidth + 'px');
    canvas.setAttribute('height', element.offsetHeight + 'px');

    element.appendChild(canvas);

    return canvas.getContext('2d');

}
