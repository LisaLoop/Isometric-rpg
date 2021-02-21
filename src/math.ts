// TODO
/*
write radians2degrees, cartesian2polar
*/

export type Point = {
    x: number,
    y: number
}

export type PolarPoint = {
    angle: number,
    radius: number
}


export const distance = (a: Point, b: Point): number => {
    const distance = Math.sqrt(((a.x - b.x)*(a.x - b.x)) + ((a.y - b.y)*(a.y - b.y)))
    return distance
}

export const degrees2radians = (degree: number) => {
    return (degree * Math.PI/180) 
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