import {calculator} from "./index";

describe('calculator', () => {
    it('should calculate', () => {
        const reactiveCalculator = calculator({a : 1, b: 2});

        reactiveCalculator.updateA(2);
        reactiveCalculator.updateB(3);
        reactiveCalculator.updateC(7);
        expect(reactiveCalculator.getA()).toBe(4);
        expect(reactiveCalculator.getB()).toBe(3);
        expect(reactiveCalculator.calculateC()).toBe(7);
    })
})