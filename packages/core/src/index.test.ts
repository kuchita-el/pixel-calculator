import {describe, test, expect} from "vitest"
import {compressedArrangement} from "./index.ts";

describe('compressedArrangement', () => {
    test("要素数が一つのとき", () => {
        expect(compressedArrangement([1])).toStrictEqual(["filled"]);
        expect(compressedArrangement([2])).toStrictEqual(["filled","filled"]);
        expect(compressedArrangement([3])).toStrictEqual(["filled","filled","filled"]);
    })

    test("要素数が二つ以上のとき", () => {
        expect(compressedArrangement([1, 1])).toStrictEqual(["filled", "empty","filled"]);
        expect(compressedArrangement([2, 3])).toStrictEqual(["filled","filled", "empty","filled","filled","filled"]);
        expect(compressedArrangement([1,2,3])).toStrictEqual(["filled", "empty","filled","filled", "empty","filled","filled","filled"]);
    })
});
