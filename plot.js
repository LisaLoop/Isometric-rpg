/**
 * 
 *- add functions from game to plot
 *- add the tooltip so that when you move the mouse on thescreen the tooltip value
 *  changes and shows the results of the function.
 */
const plot = document.getElementById("plot");
const ctx = plot.getContext('2d');
// ctx.fillRect(10, 10, 150, 100);
const drawLine = (x1,y1, x2,y2) => {
    ctx.beginPath();       // Start a new path
    ctx.moveTo(x1, y1);    // Move the pen to (30, 50)
    ctx.lineTo(x2, y2);  // Draw a line to (150, 100)
    ctx.lineWidth = 0.1;
    ctx.stroke();          // Render the path
}

const putPixel = (x,y, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x-2,y-2, 4,4);
}
const plotGraph = (f) => {
    const bounds = {
        minX: -400,
        maxX: 400,
        minY: -400,
        maxY: 400
    };
    const step = {x:5, y:5};
    let px = bounds.minX;
    let py = f(bounds.minX);
    let spx = px+200;
    let spy = 400-py;
    for(let x= bounds.minX; x < bounds.maxX; x +=step.x){
        let y = f(x);
        let sy= 400-y;
        let sx= x+200;
        const color = convert2Color(y);

        putPixel(sx,sy, color);
        drawLine(spx,spy, sx,sy);
        // store previous values of function
        px = x;
        py = y;
        spx = px+200;
        spy = 400-py;
    }
}

const convert2Color = (x) => {
    const value = Math.round(256 * (x/100));
    y = clamp(value, 0, 256);
    return `rgb(${y},0,0)`;
}

const clamp = (value, min, max) => {
    if(value < min){return min}
    if(value > max){return max}
    return value;
}

const f1 = (x) => {
    return (x**2)/100;
}
const f2 = (x) => {
    return (Math.log(x))*10;
}
plotGraph(f1);
plotGraph(f2);

