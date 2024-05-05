import {describe, test, expect} from "vitest";
import {indicatorStringSchema} from "~/composables/calculator-form.ts";

describe("indicatorStringSchema", () => {
  test("validate", () => {
    expect(indicatorStringSchema.isValidSync(""), "空文字列").toBeFalsy();
    expect(indicatorStringSchema.isValidSync("   "), "空白").toBeFalsy();
    expect(indicatorStringSchema.isValidSync("1"), "数字のみ").toBeTruthy();
    expect(indicatorStringSchema.isValidSync("at53"), "英数字混在").toBeFalsy();
    expect(indicatorStringSchema.isValidSync("1 24"), "数字と空白1").toBeTruthy();
    expect(indicatorStringSchema.isValidSync(" 1  196 "), "数字と空白2").toBeTruthy();
  })
  test("transform", () => {
    expect(indicatorStringSchema.validateSync("1")).toBe("1");
    expect(indicatorStringSchema.validateSync("1 24")).toBe("1 24");
    expect(indicatorStringSchema.validateSync(" 1  196 ")).toBe("1 196");
  })

})
