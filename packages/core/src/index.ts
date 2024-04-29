import {IndicatorValue} from "./indicator.ts";
import {PixelState} from "./canvas.ts";

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

export type {PixelState, IndicatorValue}
