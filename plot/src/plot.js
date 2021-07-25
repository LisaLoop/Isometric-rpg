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
            minX: -400,
            maxX: 400,
            minY: -400,
            maxY: 400
        };
        var step = { x: 5, y: 5 };
        var px = bounds.minX;
        var py = f(bounds.minX);
        var spx = px + 200;
        var spy = 400 - py;
        for (var x = bounds.minX; x < bounds.maxX; x += step.x) {
            var y = f(x);
            var sy = 400 - y;
            var sx = x + 200;
            var color = convert2Color(y);
            putPixel(sx, sy, color);
            drawLine(spx, spy, sx, sy);
            // store previous values of function
            px = x;
            py = y;
            spx = px + 200;
            spy = 400 - py;
        }
    };
    var convert2Color = function (x) {
        var value = Math.round(256 * (x / 100));
        var y = clamp(value, 0, 256);
        return "rgb(" + y + ",0,0)";
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
    plotGraph(f2);
};
// ctx.fillRect(10, 10, 150, 100);
var f1 = function (x) {
    return (Math.pow(x, 2)) / 100;
};
var f2 = function (x) {
    return (Math.log(x)) * 10;
};
drawPlot();
