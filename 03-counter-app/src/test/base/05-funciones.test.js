import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("tests for 05-funciones", () => {
    test("getUser should return the expected user", () => {
        const expectedUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(user).toEqual(expectedUser);
    });
    test("getUsuarioActivo should return the expected user", () => {
        const name = 'Juan';
        const expectedUser = {
            uid: 'ABC567',
            username: name
        };
        const user = getUsuarioActivo(name);
        expect(user).toEqual(expectedUser);
    });
});