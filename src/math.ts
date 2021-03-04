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