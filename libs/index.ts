

export const requiredPixelSize: (pixelDefinition: number[]) => number = pixelDefinition => {
    if (pixelDefinition.length === 0) return 0;
    const filledTotal = pixelDefinition.reduce((previous, current) => previous + current, 0);
    const gutterTotal = pixelDefinition.length - 1;
    return filledTotal + gutterTotal;
}

export type PixelStatus = 'painted' | 'blank' | 'unknown'

export const pixelStatuses: (pixelSize: number, pixelDefinition: number[]) => PixelStatus[] = (pixelSize, pixelDefinition) =>  {
    if (pixelDefinition.length === 0) {
        return filledWith('blank', pixelSize);
    }
    const remained = pixelSize - requiredPixelSize(pixelDefinition)

    if (remained === 0) {
        return pixelDefinition
            .map(value => filledWith('painted', value))
            .reduce((previousValue, currentValue, currentIndex) => {
                if (currentIndex > 0) {
                    previousValue.push("blank")
                }
                previousValue.push(...currentValue)
                return previousValue
            }, [])
    }

    return pixelDefinition
        .map((value) => {
            if (value <= remained) {
                return filledWith("unknown", value)
            }
            return [...filledWith("unknown", remained), ...filledWith("painted", value - remained)]
        })
        .reduce((previousValue, currentValue, currentIndex, array) => {
            if (currentIndex > 0) {
                previousValue.push("unknown")
            }
            previousValue.push(...currentValue)
            if (currentIndex === array.length - 1) {
                previousValue.push(...filledWith("unknown", remained))
            }
            return previousValue
        }, [])
}

const filledWith: (status: PixelStatus, size: number) => PixelStatus[] = (status, size) => {
    let result: PixelStatus[] = [];
    for (let i = 0; i < size; i++) {
        result.push(status)
    }
    return  result;
}
