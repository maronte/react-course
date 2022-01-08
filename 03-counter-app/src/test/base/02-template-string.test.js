import { getSaludo } from "../../base/02-template-string";

describe("tests for 02-template-string", () => {
    test("getSaludo should return the expected gretting", () => {
        const name = "John";
        const expectedGreeting = `Hola ${name}`;
        
        const greeting = getSaludo(name);

        expect(greeting).toBe(expectedGreeting);
    });
    test("getSaludo should return Fernando as name without any argument", () => {
        const expectedGreeting = "Hola Fernando";
        
        const greeting = getSaludo();

        expect(greeting).toBe(expectedGreeting);
    });
});