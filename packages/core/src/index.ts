type PixelCountList = [number, ...number[]];

type PixelState = "empty" | "filled" | "TBD"

export const compressedArrangement = (list: PixelCountList): PixelState[] => {
    return list.map(item => new Array(item).fill("filled")).reduce((previousValue, currentValue) => {
        return previousValue.length === 0 ? currentValue : [...previousValue, "empty", ...currentValue]
    }, [] as PixelState[])
}
