type Point = {
    x: number,
    y: number
}

type PolarPoint = {
    angle: number,
    radius: number
}
type BoundingBox = {
    minX: number,
    minY: number,
    maxX: number,
    maxY: number,
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
    if (ctx === null) { return }
    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
        ctx.beginPath();       // Start a new path
        ctx.moveTo(x1, y1);    // Move the pen to (30, 50)
        ctx.lineTo(x2, y2);  // Draw a line to (150, 100)
        ctx.lineWidth = 0.1;
        ctx.stroke();          // Render the path
    }

    const putPixel = (x: number, y: number, color: string) => {
        ctx.fillStyle = color;
        ctx.fillRect(x - 2, y - 2, 4, 4);
    }
    const plotGraph = (f: (x: number, y: number) => Point) => {
        const bounds = {
            minX: -200,
            maxX: 200,
            minY: -200,
            maxY: 200
        };
        const minMax = getMinMax(f);
        const step = { x: 2, y: 2 };
        for (let x = bounds.minX; x < bounds.maxX; x += step.x) {
            for (let y = bounds.minY; y < bounds.maxY; y += step.y) {
                let output = f(x, y);
                let sy = 400 - y;
                let sx = x + 200;
                const color = convert2Color(output, minMax);

                putPixel(sx, sy, color);

            }
        }
    }
    const getMinMax = (f: (x: number, y: number) => Point) => {
        const bounds = {
            minX: -200,
            maxX: 200,
            minY: -200,
            maxY: 200
        };
        const step = { x: 2, y: 2 };
        let minX = f(bounds.minX, bounds.minY).x;
        let minY = f(bounds.minX, bounds.minY).y;
        let maxX = f(bounds.maxX, bounds.maxY).x;
        let maxY = f(bounds.maxX, bounds.maxY).y;
         
        for (let x = bounds.minX; x < bounds.maxX; x += step.x) {
            for (let y = bounds.minY; y < bounds.maxY; y += step.y) {
                let output = f(x, y);
                if(output.x < minX){
                    minX=output.x;
                }
                if(output.y < minY){
                    minY = output.y;
                }
                if(output.x > maxX){
                    maxX=output.x;
                }
                if(output.y > maxY){
                    maxY = output.y;
                }
            }
        }
        return {minX, minY, maxX, maxY}
    }

    const convert2Color = (point: Point, bounds: BoundingBox): string => {
        console.log("input: ", point);
        let distanceX = bounds.maxX - bounds.minX;
        let distanceY = bounds.maxY - bounds.minY;
        if(distanceX === 0){distanceX=1}
        if(distanceY === 0){distanceY=1}
        let x2 = point.x - bounds.minX;
        let y2 = point.y - bounds.minY;
        const xValue = Math.round(256 * (x2 / distanceX));
        let r = clamp(xValue, 0, 256);

        const yValue = Math.round(256 * (y2 / distanceY));
        let g = clamp(yValue, 0, 256);
        console.log("output: ", `rgb(${r},${g},0)`);
        return `rgb(${r},${g},0)`;
    }

    const clamp = (value: number, min: number, max: number): number => {
        if (value < min) { return min }
        if (value > max) { return max }
        return value;
    }
    plotGraph(f1);
    // plotGraph(f2);

}
// ctx.fillRect(10, 10, 150, 100);

const f1 = (x:number, y:number): Point => {
    return {x: ((x ** 2) / 100), y: ((y ** 2) / 100)}
}

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
const f3 = (x: number,y: number): Point => {
 return {"x": x%10, "y": y%10}
}

drawPlot();

