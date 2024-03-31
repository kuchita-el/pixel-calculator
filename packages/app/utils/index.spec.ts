import {pixelStatuses, requiredPixelSize} from "./index"

describe('requiredPixelSize', () => {
    it('塗りつぶす箇所が0個だったら0を返す', () => {
        expect(requiredPixelSize([]))
        .toBe(0)
    })

    it('塗りつぶすが箇所が1個だったらその定義を返す', () => {
        expect(requiredPixelSize([10]))
            .toBe(10)
    })

    it('塗りつぶす箇所が2個以上だったら塗りつぶすマスの間の空白マスが1個と仮定して計算する', () => {
        expect(requiredPixelSize([2, 5, 10]))
            .toBe(19)
    })
})

describe('pixelStatuses', () => {
    it('塗りつぶす箇所が0個だったら全部のマス目を空で埋めた配列を返す', () => {
        expect(pixelStatuses(5, []))
            .toEqual(["blank", "blank", "blank", "blank", "blank"])
    })

    it('全部のマス目が確定マスになる場合', () => {
        expect(pixelStatuses(5, [1, 3]))
            .toEqual(["painted", "blank", "painted", "painted", "painted"])
    })

    it('不定マスがある場合', () => {
        expect(pixelStatuses(5, [2, 1]))
            .toEqual(["unknown", "painted", "unknown", "unknown", "unknown"])
    })

    it('不定マスしかない場合', () => {
        expect(pixelStatuses(5, [1, 1]))
            .toEqual(["unknown", "unknown", "unknown", "unknown", "unknown"])
    })
})
