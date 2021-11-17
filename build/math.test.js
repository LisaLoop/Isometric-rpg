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
describe('#radians2degrees', function () {
    it('it converts radians to degrees', function () {
        var radians = Math.PI * 2;
        var output = 360;
        var epsilon = 0.0000001;
        expect(math_1.radians2degrees(radians) - output).toBeLessThan(epsilon);
    });
    it('it converts radians to degrees with other input', function () {
        var radians = 0;
        var output = 0;
        expect(math_1.radians2degrees(radians) - output).toBe(0);
    });
});
describe("#cartesian2polar", function () {
    it("returns a polar point given some input as cartesian point", function () {
        var cartPoint = { x: 10, y: 10 };
        expect(math_1.cartesian2polar(cartPoint)).toEqual({ angle: math_1.degrees2radians(45), radius: Math.sqrt(200) });
    });
});
/**
 * change the scale of the viewport will click a different tile
 * changing the viewport location will change the tile that was clicked
 * moving the mouse around will change the tile that you clicked
 *
 * if the function userToBoard provides negative values to x or y
 * then we may discard the input as irrelevant because they aren't
 * clicking within the bounds of the board.
 *
 *
 */
describe("#boardSpaceToScreenSpace", function () {
    test("given all parameters have a value of x:0,y:0 the output is {x:0,y:0}", function () {
        var boardPoint = { x: 0, y: 0 };
        var scrollPosition = { x: 0, y: 0 };
        var scale = { x: 0, y: 0 };
        expect(math_1.boardSpaceToScreenSpace(boardPoint, scrollPosition, scale)).toEqual({ x: 0, y: 0 });
    });
    /*
    given boardPos x,y we will need a function to get the four points of a tile on the board
    0,0
    1,0
    1,1
    2,1
    2,2
    */
    // test("", () => {
    //     const boardPoint = {x:1, y:0};
    //     const scrollPosition = {x:10, y:10};
    //     const scale = {x:50,y:25};
    //     expect(boardSpaceToScreenSpace(boardPoint, scrollPosition, scale)).toEqual({x:0, y: 0});
    // })
});
describe("#screenSpaceToBoardSpace", function () {
    test("the mouse is x: 25 y: 12.5 and scale is x:50, y:25 and scrollPosition is 0,0 you should land inside the first tile, 0,0", function () {
        console.table();
        expect(math_1.screenSpaceToBoardSpace({ x: 25, y: 0 }, { x: 0, y: 0 }, { x: 50, y: 25 })).toEqual({ x: 0, y: 0 });
    });
});
