export const requiredPixelSize: (pixelDefinition: number[]) => number = pixelDefinition => {
    if (pixelDefinition.length === 0) return 0;
    const filledTotal = pixelDefinition.reduce((previous, current) => previous + current, 0);
    const gutterTotal = pixelDefinition.length - 1;
    return filledTotal + gutterTotal; 
}