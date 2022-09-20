import { requiredPixelSize } from "."

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