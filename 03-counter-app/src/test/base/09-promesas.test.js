import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Test for promises', () => {
    test("should return a heroe by promise way", done => {
        getHeroeByIdAsync(1).then(heroe => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });

    test("should return rejected promise when the heroe with the given id does not exists", done => {
        getHeroeByIdAsync(10).catch(err => {
            expect(err).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});