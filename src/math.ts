export type Point = {
    x: number,
    y: number
}

export type PolarPoint = {
    angle: number,
    radius: number
}

const tileWidth = 50;
const getTileWidth = () => {
    return tileWidth
}

const tileHeight = 25; 
const getTileHeight = () => {
    return tileHeight
}
/*
Sx <- x * tw/2 - y * tw/2 
Sy <- x * th/2 + y * th/2

Sx <- (x - y) * tw/2
Sy <- (x + y) * th/2

screen space: 1600 / 900; // canvas size
camera space: 512 /480; // window into iso grid space
world space: 64 x 64 // board size 

https://youtu.be/ukkbNKTgf5U?t=161
*/
export const boardSpaceToScreenSpace = (board: Point): Point => {
    const tileWidth = getTileWidth();
    const tileHeight = getTileHeight();
    const screenX = (board.x - board.y) * tileWidth / 2;
    const screenY = (board.x + board.y) * tileHeight / 2;
    return {x: screenX, y: screenY}
}


/*
sy = (x + y) * C

(x + y) * C = sy
x + y = sy/C 
y = sy/C - x

(screen.x - screen.y) * tileWidth / 2;

*/
// export const screenSpaceToBoardSpace = (board: Point): Point => {
//     const tileWidth = getTileWidth();
//     const tileHeight = getTileHeight();
//     // const bx = 
//     // const by;
// }




export const distance = (a: Point, b: Point): number => {
    const distance = Math.sqrt(((a.x - b.x)*(a.x - b.x)) + ((a.y - b.y)*(a.y - b.y)))
    return distance
}

export const degrees2radians = (degree: number): number => {
    return (degree * Math.PI/180)
}

export const radians2degrees = (radians: number): number => {
 return (radians * 180/Math.PI)
}
//  (distance: 13, angle: 22.6°) 
/*
x = r × cos( θ )
y = r × sin( θ )

*/
export const polar2cartesian = (point: PolarPoint): Point => {
    const x = point.radius * Math.cos(point.angle);
    const y = point.radius * Math.sin(point.angle);
    return {x, y}
}
/*
r = √ ( x2 + y2 )
θ = tan-1 ( y / x )
*/
export const cartesian2polar = (cartesian: Point): PolarPoint => {
    const angle = Math.atan(cartesian.y/cartesian.x);
    const radius = Math.sqrt((cartesian.x**2) + (cartesian.y**2))
    return {angle, radius}
}