/**
 * 
 *- add functions from game to plot
 *- add the tooltip so that when you move the mouse on thescreen the tooltip value
 *  changes and shows the results of the function.
 */
type Point = {
    x: number,
    y: number
}

type PolarPoint = {
    angle: number,
    radius: number
}
const screenSpaceToBoardSpace = (screen: Point, scrollPosition: Point, scale: Point): Point => {
    const tileWidth = scale.x;
    const tileHeight = scale.y;
    const boardX = ((tileHeight * screen.x + screen.y * tileWidth) / (tileHeight * tileWidth)) - scrollPosition.x;
    const boardY = (screen.y / tileHeight - screen.x / tileWidth) - scrollPosition.y;
    return { x: boardX, y: boardY }
}

const drawPlot = () => {
    const plot: HTMLElement | null = document.getElementById("plot");
    if (typeof plot === null) { return }
    const plotC: HTMLCanvasElement = plot as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D | null = plotC.getContext('2d');
    if(ctx === null){return}
    const drawLine = (x1:number, y1:number, x2:number, y2:number) => {
        ctx.beginPath();       // Start a new path
        ctx.moveTo(x1, y1);    // Move the pen to (30, 50)
        ctx.lineTo(x2, y2);  // Draw a line to (150, 100)
        ctx.lineWidth = 0.1;
        ctx.stroke();          // Render the path
    }

    const putPixel = (x: number, y:number, color: string) => {
        ctx.fillStyle = color;
        ctx.fillRect(x - 2, y - 2, 4, 4);
    }
    const plotGraph = (f: (x:number) => number) => {
        const bounds = {
            minX: -400,
            maxX: 400,
            minY: -400,
            maxY: 400
        };
        const step = { x: 5, y: 5 };
        let px = bounds.minX;
        let py = f(bounds.minX);
        let spx = px + 200;
        let spy = 400 - py;
        for (let x = bounds.minX; x < bounds.maxX; x += step.x) {
            let y = f(x);
            let sy = 400 - y;
            let sx = x + 200;
            const color = convert2Color(y);

            putPixel(sx, sy, color);
            drawLine(spx, spy, sx, sy);
            // store previous values of function
            px = x;
            py = y;
            spx = px + 200;
            spy = 400 - py;
        }
    }

    const convert2Color = (x: number): string => {
        const value = Math.round(256 * (x / 100));
        let y = clamp(value, 0, 256);
        return `rgb(${y},0,0)`;
    }

    const clamp = (value:number, min:number, max:number):number => {
        if (value < min) { return min }
        if (value > max) { return max }
        return value;
    }
    plotGraph(f1);
    plotGraph(f2);

}
// ctx.fillRect(10, 10, 150, 100);

const f1 = (x:number):number => {
    return (x ** 2) / 100;
}
const f2 = (x:number):number => {
    return (Math.log(x)) * 10;
}

drawPlot();

