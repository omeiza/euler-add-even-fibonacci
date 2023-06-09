import {describe, expect, test} from "@jest/globals";
import fibAddEven from "./index";

describe("Even numbers in a Fibonacci sequence of limit n", () => {
	test("Get sum of even numbers in a Fibonacci from 1 to 4000000", () => {
		expect(fibAddEven(4000000)).toEqual(4613732);
	});
});