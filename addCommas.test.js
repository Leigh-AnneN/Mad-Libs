const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it adds commas to a number", () => {
    expect(addCommas(1000)).toBe("1,000");
    expect(addCommas(1000000)).toBe("1,000,000");
    expect(addCommas(6)).toBe("6");
    expect(addCommas(-10)).toBe("-10");
  });

});


