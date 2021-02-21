"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = require("./math");
describe('#distance', function () {
    test('Points {0, 0}, {1, 1} should return the square root of 2', function () {
        var p1 = { x: 0, y: 0 };
        var p2 = { x: 1, y: 1 };
        expect(math_1.distance(p1, p2)).toBe(Math.sqrt(2));
    });
    test('Points {0, 0}, {0, 1} return 1', function () {
        var p1 = { x: 0, y: 0 };
        var p2 = { x: 0, y: 1 };
        expect(math_1.distance(p1, p2)).toBe(1);
    });
    test('Points {2, 2}, {1, 1} return the square root of 2', function () {
        var p1 = { x: 2, y: 2 };
        var p2 = { x: 1, y: 1 };
        expect(math_1.distance(p1, p2)).toBe(Math.sqrt(2));
    });
    test('Points {-1, -1}, {1, 1} return the square root of 2 times 2', function () {
        var p1 = { x: -1, y: -1 };
        var p2 = { x: 1, y: 1 };
        expect(math_1.distance(p1, p2)).toBe(Math.sqrt(2) * 2);
    });
});
describe('#degrees2radians', function () {
    test('90 -> Math.PI/2', function () {
        var degree = 90;
        expect(math_1.degrees2radians(degree)).toBe(Math.PI / 2);
    });
    test('360 -> Math.PI * 2', function () {
        var degree = 360;
        expect(math_1.degrees2radians(degree)).toBe(Math.PI * 2);
    });
});
describe('#polar2cartesian', function () {
    test('1@45 should be close to the square root of 2/2', function () {
        var epsilon = 0.0000001;
        var polarPoint = { radius: 1, angle: math_1.degrees2radians(45) };
        var output = math_1.polar2cartesian(polarPoint);
        expect((output.x - Math.sqrt(2) / 2) + (output.y - Math.sqrt(2) / 2)).toBeLessThan(epsilon);
    });
});
