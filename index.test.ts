import {hello} from "./index";

describe('index', () => {
    it('should greet', () => {
        expect(hello('test')).toBe('hello test')
    })
})