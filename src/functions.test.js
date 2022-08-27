import { timesTwo } from "./functions";

test("Multiplies by two", () => {
    expect(timesTwo(4, 2)).toBe(8);
});