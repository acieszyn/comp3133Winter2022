const { assert } = require("chai");
const { add, sub, mul, div } = require("../lab2_mocha_test/app/calculator");

describe("add(5, 2)", () => {
    it("expected result 7", () => {
        assert.equal(add(5, 2), 7);
    });

    it("expected result 8", () => {
        assert.equal(add(5, 2), 8);
    });
});

describe("sub(5, 2)", () => {
    it("expected result 3", () => {
        assert.equal(sub(5, 2), 3);
    });
    it("expected result 5", () => {
        assert.equal(sub(5, 2), 5);
    });
});

describe("mul(5, 2)", () => {
    it("expected result 10", () => {
        assert.equal(mul(5, 2), 10);
    });
    it("expected result 12", () => {
        assert.equal(mul(5, 2), 12);
    });
});

describe("div(10, 2)", () => {
    it("expected result 5", () => {
        assert.equal(div(10, 2), 5);
    });
    it("expected result 2", () => {
        assert.equal(div(10, 2), 2);
    });
});

