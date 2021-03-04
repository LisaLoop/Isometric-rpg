import { distance, degrees2radians, polar2cartesian, radians2degrees,cartesian2polar } from './math'
import { Point, PolarPoint } from './math'

describe('#distance', () => {
    test('Points {0, 0}, {1, 1} should return the square root of 2', () => {
        const p1: Point = { x: 0, y: 0 };
        const p2: Point = { x: 1, y: 1 };
        expect(distance(p1, p2)).toBe(Math.sqrt(2))
    })
    test('Points {0, 0}, {0, 1} return 1', () => {
        const p1: Point = { x: 0, y: 0 };
        const p2: Point = { x: 0, y: 1 };
        expect(distance(p1, p2)).toBe(1)
    })
    test('Points {2, 2}, {1, 1} return the square root of 2', () => {
        const p1: Point = { x: 2, y: 2 };
        const p2: Point = { x: 1, y: 1 };
        expect(distance(p1, p2)).toBe(Math.sqrt(2))
    })
    test('Points {-1, -1}, {1, 1} return the square root of 2 times 2', () => {
        const p1: Point = { x: -1, y: -1 };
        const p2: Point = { x: 1, y: 1 };
        expect(distance(p1, p2)).toBe(Math.sqrt(2)*2)
    })
});

describe('#degrees2radians', () => {
    test('90 -> Math.PI/2', () => {
        const degree = 90
        expect(degrees2radians(degree)).toBe(Math.PI/2)
    })
    test('360 -> Math.PI * 2', () => {
        const degree = 360
        expect(degrees2radians(degree)).toBe(Math.PI*2)
    })
})

describe('#polar2cartesian', () => {
    test('1@45 should be close to the square root of 2/2', () => {
        const epsilon = 0.0000001;
        const polarPoint: PolarPoint = {radius: 1, angle: degrees2radians(45) }
        const output = polar2cartesian(polarPoint);
        expect((output.x-Math.sqrt(2)/2) + (output.y - Math.sqrt(2)/2)).toBeLessThan(epsilon)
    })
})

describe('#radians2degrees', () => {
    it('it converts radians to degrees', () => {
        const radians = Math.PI * 2;
        const output = 360;
        const epsilon = 0.0000001;
        expect(radians2degrees(radians) - output).toBeLessThan(epsilon)
    })
    it('it converts radians to degrees with other input', () => {
        const radians = 0;
        const output = 0;
        expect(radians2degrees(radians) - output).toBe(0)
    })
})

describe("#cartesian2polar", () => {
    it("returns a polar point given some input as cartesian point", () => {
        const cartPoint = {x: 10, y: 10 }
        expect(cartesian2polar(cartPoint)).toBe({angle: radians2degrees(45),radius: Math.sqrt(200)})
    })
})