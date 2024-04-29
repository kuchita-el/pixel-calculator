export type Canvas = CanvasPixel[];

type CanvasLine = CanvasPixel[]

interface CanvasPixel {
    readonly x: number;
    readonly y: number;
    readonly state: PixelState;
}

/**
 * 塗らないマス
 */
type Empty = "empty"

/**
 * 塗るマス
 */
type Filled = "filled"

/**
 * 塗るか塗らないか未定のマス
 */
type TBD = "TBD"

/**
 * マスの状態
 * @enum
 */
export type PixelState = Empty | Filled | TBD

/**
 * 横 x マス、縦 y マスのキャンバスを作る
 * @param x - 水平方向のマス数
 * @param y - 垂直方向のマス数
 */
export const createCanvas = (x: number, y: number): Canvas => {
    return new Array(x).flatMap((_, xIndex) => new Array(y).map((_, yIndex) => ({
        x: xIndex,
        y: yIndex,
        state: "TBD"
    })));
}

/**
 * キャンバスから水平方向のラインを取得する
 * @param canvas - キャンバス
 * @param y - 垂直方向のインデックス(0で始まる)
 */
export const horizontalLine = (canvas: Canvas, y: number): CanvasLine => {
    return canvas.filter(value => value.y === y);
}

/**
 * キャンバスから垂直方向のラインを取得する
 * @param canvas - キャンバス
 * @param x - 水平方向のインデックス(0で始まる)
 */
export const verticalLine = (canvas: Canvas, x: number): CanvasLine => {
    return canvas.filter(value => value.x === x);
}
