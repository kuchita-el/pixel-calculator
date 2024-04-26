export type Canvas = CanvasPixel[];

type CanvasLine = CanvasPixel[]

interface CanvasPixel {
    readonly x: number;
    readonly y: number;
    readonly state: PixelState;
}

export type PixelState = "empty" | "filled" | "TBD"

/**
 * 横 x マス、縦 y マスのキャンバスを作る
 * @param x
 * @param y
 */
export const createCanvas = (x: number, y: number): Canvas => {
    return new Array(x).flatMap((_, xIndex) => new Array(y).map((_, yIndex) => ({x: xIndex, y: yIndex, state: "TBD"})));
}

/**
 * キャンバスから水平方向のラインを取得する
 * @param canvas
 * @param y
 */
export const horizontalLine = (canvas: Canvas, y: number): CanvasLine => {
    return canvas.filter(value => value.y === y);
}

/**
 * キャンバスから垂直方向のラインを取得する
 * @param canvas
 * @param x
 */
export const verticalLine = (canvas: Canvas, x: number): CanvasLine => {
    return canvas.filter(value => value.x === x);
}
