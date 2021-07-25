var screenSpaceToBoardSpace = function (screen, scrollPosition, scale) {
    var tileWidth = scale.x;
    var tileHeight = scale.y;
    var boardX = ((tileHeight * screen.x + screen.y * tileWidth) / (tileHeight * tileWidth)) - scrollPosition.x;
    var boardY = (screen.y / tileHeight - screen.x / tileWidth) - scrollPosition.y;
    return { x: boardX, y: boardY };
};
var drawPlot = function () {
    var plot = document.getElementById("plot");
    if (typeof plot === null) {
        return;
    }
    var plotC = plot;
    var ctx = plotC.getContext('2d');
    if (ctx === null) {
        return;
    }
    var drawLine = function (x1, y1, x2, y2) {
        ctx.beginPath(); // Start a new path
        ctx.moveTo(x1, y1); // Move the pen to (30, 50)
        ctx.lineTo(x2, y2); // Draw a line to (150, 100)
        ctx.lineWidth = 0.1;
        ctx.stroke(); // Render the path
    };
    var putPixel = function (x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x - 2, y - 2, 4, 4);
    };
    var plotGraph = function (f) {
        var bounds = {
            minX: -200,
            maxX: 200,
            minY: -200,
            maxY: 200
        };
        var minMax = getMinMax(f);
        var step = { x: 2, y: 2 };
        for (var x = bounds.minX; x < bounds.maxX; x += step.x) {
            for (var y = bounds.minY; y < bounds.maxY; y += step.y) {
                var output = f(x, y);
                var sy = 400 - y;
                var sx = x + 200;
                var color = convert2Color(output, minMax);
                putPixel(sx, sy, color);
            }
        }
    };
    var getMinMax = function (f) {
        var bounds = {
            minX: -200,
            maxX: 200,
            minY: -200,
            maxY: 200
        };
        var step = { x: 2, y: 2 };
        var minX = f(bounds.minX, bounds.minY).x;
        var minY = f(bounds.minX, bounds.minY).y;
        var maxX = f(bounds.maxX, bounds.maxY).x;
        var maxY = f(bounds.maxX, bounds.maxY).y;
        for (var x = bounds.minX; x < bounds.maxX; x += step.x) {
            for (var y = bounds.minY; y < bounds.maxY; y += step.y) {
                var output = f(x, y);
                if (output.x < minX) {
                    minX = output.x;
                }
                if (output.y < minY) {
                    minY = output.y;
                }
                if (output.x > maxX) {
                    maxX = output.x;
                }
                if (output.y > maxY) {
                    maxY = output.y;
                }
            }
        }
        return { minX: minX, minY: minY, maxX: maxX, maxY: maxY };
    };
    var convert2Color = function (point, bounds) {
        console.log("input: ", point);
        var distanceX = bounds.maxX - bounds.minX;
        var distanceY = bounds.maxY - bounds.minY;
        if (distanceX === 0) {
            distanceX = 1;
        }
        if (distanceY === 0) {
            distanceY = 1;
        }
        var x2 = point.x - bounds.minX;
        var y2 = point.y - bounds.minY;
        var xValue = Math.round(256 * (x2 / distanceX));
        var r = clamp(xValue, 0, 256);
        var yValue = Math.round(256 * (y2 / distanceY));
        var g = clamp(yValue, 0, 256);
        console.log("output: ", "rgb(" + r + "," + g + ",0)");
        return "rgb(" + r + "," + g + ",0)";
    };
    var clamp = function (value, min, max) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    };
    plotGraph(f1);
    // plotGraph(f2);
};
// ctx.fillRect(10, 10, 150, 100);
var f1 = function (x, y) {
    return { x: ((Math.pow(x, 2)) / 100), y: ((Math.pow(y, 2)) / 100) };
};
// const f1 = (x: number, y: number): Point => {
//     // return {x: ((x ** 2) / 100), y: ((y ** 2) / 100)}
//     const x1 = (x * 1) <= 0 ? 0 : x * 1;
//     const y1 = (y * 1) <= 0 ? 0 : y * 1;
//     return { x: x1, y: y1 }
// }
// const f2 = (x:number, y:number):Point => {
//     // return {x: (Math.log(x)) * 10, y:  (Math.log(y)) * 10}
//     return {x,y}
// }
var f3 = function (x, y) {
    return { "x": x % 10, "y": y % 10 };
};
drawPlot();
