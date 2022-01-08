import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

describe("tests for 08-imp-exp", () => {
    test("should return a heroe by id", () => {
        const expectedHeroe = {
            id: 1,
            name: "Batman",
            owner: "DC"
        };
        const heroe = getHeroeById(1);
        expect(heroe).toEqual(expectedHeroe);
    });

    test("should return undefined when sending a id that does not exists", () => {
        const heroe = getHeroeById(10);
        expect(heroe).toBe(undefined);
    });

    test("should return a list of heroes by owner", () => {
        const expectedHeroes = [
            {
                id: 2,
                name: "Spiderman",
                owner: "Marvel"
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ];
        const heroes = getHeroesByOwner("Marvel");
        expect(heroes).toStrictEqual(expectedHeroes);
    });

    test("should return an empty array when the owner does not exists", () => {
        const heroes = getHeroesByOwner("Xmen");
        expect(heroes).toStrictEqual([]);
    });
});