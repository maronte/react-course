import { retornaArreglo } from "../../base/07-deses-arr";
import "@testing-library/jest-dom";

describe("test for 07-deses-arr", () => {
    test("retornaArreglo should return an array with a string and a number", () => {
        const expectedArr = ['ABC', 123];
        const expectedString = 'ABC';
        const expectedNumber = 123;

        const arr = retornaArreglo();
        const [string, number] = arr;

        expect(arr).toEqual(expectedArr);
        
        expect(typeof string).toBe("string");
        expect(string).toBe(expectedString);

        expect(typeof number).toBe("number");
        expect(number).toBe(expectedNumber);
    });
});