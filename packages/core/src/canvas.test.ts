import {describe, expect, test} from "vitest";
import {createCanvasLine} from "./canvas.ts";

describe("createCanvasLine", () => {
    test(() => {
        expect(createCanvasLine(1)).toStrictEqual(["TBD"])
        expect(createCanvasLine(2)).toStrictEqual(["TBD", "TBD", "TBD"])
        expect(createCanvasLine(3)).toStrictEqual(["TBD", "TBD", "TBD"])
    })
})
