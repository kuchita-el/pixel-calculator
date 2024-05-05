import {IndicatorValue} from "./indicator.ts";
import {CanvasLine, PixelState} from "./canvas.ts";

export type {IndicatorValue, PixelState};
export {createCanvasLine} from "./canvas.ts"

/**
 * 塗るマス同士の間隔を1マスに仮定したときの塗り方を表す
 * @param indicatorValue - 塗るマスの数を表す数列
 * @returns マスの塗られ方
 */
export const compressedArrangement = (indicatorValue: IndicatorValue): PixelState[] => {
    return indicatorValue.map(item => new Array<PixelState>(item).fill("filled")).reduce((previousValue, currentValue) => {
        return previousValue.length === 0 ? currentValue : [...previousValue, "empty", ...currentValue]
    }, [] as PixelState[])
}

/**
 * 数列の和を求める
 * @param nums
 */
const sum = (nums: number[]): number => {
    return nums.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0)
}

/**
 * indicator をもとに、 canvasLine を確定マスで埋める
 * @param canvasLine
 * @param indicator
 */
export const decideLineArrangement = (canvasLine: CanvasLine, indicator: IndicatorValue): CanvasLine => {
    const minimumArrangeLength = sum(indicator) + indicator.length - 1;
    const canvasLength = canvasLine.length;
    const playLength = canvasLength - minimumArrangeLength;
    if (playLength < 0) {
        throw Error()
    }
    if (playLength === 0){
        return compressedArrangement(indicator)
    }
    const fromIndicator = indicator.reduce((previousValue, currentValue, currentIndex, array) => {
        if (currentIndex > 0) {
            previousValue.push("TBD")
        }
        previousValue.push(...new Array<PixelState>(playLength).fill("TBD"))
        previousValue.push(...new Array<PixelState>(Math.max(0, currentValue - playLength)).fill("filled"))
        if (currentIndex === array.length - 1) {
            previousValue.push(...new Array<PixelState>(playLength).fill("TBD"))
        }
        return previousValue
    }, [] as CanvasLine)

    return canvasLine.map((value, index) => {
        if (value === "TBD") {
            return fromIndicator[index];
        } else {
            return value
        }
    })

}
