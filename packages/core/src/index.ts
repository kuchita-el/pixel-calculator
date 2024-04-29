export type PixelCountList = [number, ...number[]];

export type PixelState = "empty" | "filled" | "TBD"

export const compressedArrangement = (list: PixelCountList): PixelState[] => {
    return list.map(item => new Array<PixelState>(item).fill("filled")).reduce((previousValue, currentValue) => {
        return previousValue.length === 0 ? currentValue : [...previousValue, "empty", ...currentValue]
    }, [] as PixelState[])
}
