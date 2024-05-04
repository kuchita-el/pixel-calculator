import {describe, expect, test} from "vitest"
import {compressedArrangement, decideLineArrangement} from "./index.ts";

describe('compressedArrangement', () => {
    test("要素数が一つのとき", () => {
        expect(compressedArrangement([1])).toStrictEqual(["filled"]);
        expect(compressedArrangement([2])).toStrictEqual(["filled", "filled"]);
        expect(compressedArrangement([3])).toStrictEqual(["filled", "filled", "filled"]);
    })

    test("要素数が二つ以上のとき", () => {
        expect(compressedArrangement([1, 1])).toStrictEqual(["filled", "empty", "filled"]);
        expect(compressedArrangement([2, 3])).toStrictEqual(["filled", "filled", "empty", "filled", "filled", "filled"]);
        expect(compressedArrangement([1, 2, 3])).toStrictEqual(["filled", "empty", "filled", "filled", "empty", "filled", "filled", "filled"]);
    })
});

describe("decideLineArrangement", () => {
    test("要素数が一つのとき", () => {
        expect(decideLineArrangement(["TBD", "TBD", "TBD"], [3])).toStrictEqual(["filled", "filled", "filled"])
        expect(decideLineArrangement(["TBD", "TBD", "TBD"], [2])).toStrictEqual(["TBD", "filled", "TBD"])
        expect(decideLineArrangement(["TBD", "TBD", "TBD"], [1])).toStrictEqual(["TBD", "TBD", "TBD"])
        expect(decideLineArrangement(["TBD", "TBD", "TBD"], [0])).toStrictEqual(["TBD", "TBD", "TBD"])
    })
    test("当素数が二つのとき", () => {
        expect(decideLineArrangement(["TBD", "TBD", "TBD", "TBD", "TBD"], [2, 2])).toStrictEqual(["filled", "filled", "empty", "filled", "filled"])
        expect(decideLineArrangement(["TBD", "TBD", "TBD", "TBD", "TBD"], [2, 1])).toStrictEqual(["TBD", "filled", "TBD", "TBD", "TBD"])
        expect(decideLineArrangement(["TBD", "TBD", "TBD", "TBD", "TBD"], [1, 1])).toStrictEqual(["TBD", "TBD", "TBD", "TBD", "TBD"])
    })

})
