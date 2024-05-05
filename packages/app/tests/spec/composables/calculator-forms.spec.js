import {describe, test, expect} from "vitest";
import {
  canvasLengthSchema,
  indicatorNumericSchema,
  indicatorSchema,
  indicatorStringSchema
} from "~/composables/calculator-form.ts";

describe("canvasLength", () => {
  test("validate", () => {
    expect(canvasLengthSchema.isValidSync(""), "空文字列").toBeFalsy();
    expect(canvasLengthSchema.isValidSync("   "), "空白").toBeFalsy();
    expect(canvasLengthSchema.isValidSync("1"), "数字のみ").toBeTruthy();
    expect(canvasLengthSchema.isValidSync("at53"), "英数字混在").toBeFalsy();
  })
  test("transform", () => {
    expect(canvasLengthSchema.validateSync("1")).toBe(1);
    expect(canvasLengthSchema.validateSync("24")).toBe(24);
  })
})

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

describe("indicatorNumericSchema", () => {
  test("validate", () => {
    expect(indicatorNumericSchema.isValidSync([]), "空配列").toBeFalsy();
    expect(indicatorNumericSchema.isValidSync([undefined]), "undefined").toBeFalsy();
    expect(indicatorNumericSchema.isValidSync([null]), "null").toBeFalsy();
    expect(indicatorNumericSchema.isValidSync(['a']), "文字列").toBeFalsy();
    expect(indicatorNumericSchema.isValidSync([1]), "数列1").toBeTruthy();
    expect(indicatorNumericSchema.isValidSync([1., 2]), "数列2").toBeTruthy();
  })
})

describe("indicatorSchema", () => {
  test("validate", () => {
    expect(indicatorSchema.isValidSync(""), "空文字列").toBeFalsy();
    expect(indicatorSchema.isValidSync("   "), "空白").toBeFalsy();
    expect(indicatorSchema.isValidSync("1"), "数字のみ").toBeTruthy();
    expect(indicatorSchema.isValidSync("at53"), "英数字混在").toBeFalsy();
    expect(indicatorSchema.isValidSync("1 24"), "数字と空白1").toBeTruthy();
    expect(indicatorSchema.isValidSync(" 1  196 "), "数字と空白2").toBeTruthy();
  })
  test("transform", () => {
    expect(indicatorSchema.validateSync("1"), "数字のみ").toStrictEqual([1]);
    expect(indicatorSchema.validateSync("1 24"), "数字と空白1").toStrictEqual([1, 24]);
    expect(indicatorSchema.validateSync(" 1  196 "), "数字と空白2").toStrictEqual([1, 196]);
  })

})
