import sum from "./sum";


test("Testing addition of two numbers", () => {
    expect(sum(1,2)).toBe(3);
});