declare var noise: any
import { boardSpaceToScreenSpace, Point } from './math'

/*
 - TODO: 
  - draw currently selected tile
  - tile click - when the user clicks on the canvas we need to know what tile was clicked and it needs to be
  highlited. 
 - increase the map size to 512
 - change the x and y offsets so that the actual starting points of the map are outside of the screen 
 - randomly spawn factories, producer/consumers, make tiles from the buildings
 - randonly spawn trees
 - write a function that converts 0,1,2,3 to tile names 

 */


/*
Example:
sPos - 1,1 
Left - 0,2
Right - 2,0
Up - 0,0
Down, 2,2

left = (sPosX - 1, sPosY + 1)
right = (sPosX + 1, sPosY -1)
up = (sPosX -1 , sPosY -1)
down = (sPosX + 1 , sPosY +1)
*/
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

// When the user uses the keyboard to navigate, they are navigating in screen 
// space, however the render code requires a location in board space. 
// This function maps, given an input coord, the new coord of the player 
// after they press a key by changing the coords into 45deg rotated new 
// co-ordinate space. 
const mapCoords = (x: number, y: number, direction: Direction): Point => {
  switch (direction) {
    case Direction.Up:
      return { x: x - 1, y: y - 1 } as Point
    case Direction.Down:
      return { x: x + 1, y: y + 1 } as Point
    case Direction.Left:
      return { x: x - 1, y: y + 1 } as Point
    case Direction.Right:
      return { x: x + 1, y: y - 1 } as Point
    default:
      throw new Error("Not a valid direction")
  }
}
// console.log(mapCoords(1,1,Direction.Up));

const perlinMap = function (value: number): number {
  if (value >= 0 && value < 80) {
    return 0 // water
  }
  if (value >= 80 && value < 100) {
    return 1 // coast
  }
  if (value >= 100 && value < 200) {
    return 2 // grass
  }
  if (value >= 200 && value < 256) {
    return 3 // snow
  }
  else {
    return 4 // error
  }
}

const BOARDHEIGHT = 64;
const BOARDWIDTH = 64;
const player = { x: BOARDWIDTH / 2, y: BOARDHEIGHT / 2 }

const updatePosition = (point: Point) => {
  player.x = clamp(5, BOARDWIDTH - 5 - 1, point.x);
  player.y = clamp(5, BOARDHEIGHT - 5 - 1, point.y);
}

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }
  let point;
  switch (event.code) {
    case "KeyS":
    case "ArrowDown":
      point = mapCoords(player.x, player.y, Direction.Down);
      updatePosition(point);
      break;
    case "KeyW":
    case "ArrowUp":
      point = mapCoords(player.x, player.y, Direction.Up);
      updatePosition(point);
      break;
    case "KeyA":
    case "ArrowLeft":
      point = mapCoords(player.x, player.y, Direction.Left);
      updatePosition(point)
      break;
    case "KeyD":
    case "ArrowRight":
      point = mapCoords(player.x, player.y, Direction.Right);
      updatePosition(point);
      break;
  }

  render();

  // Consume the event so it doesn't get handled twice
  event.preventDefault();
}, true);

var drawLine = function (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
  ctx.beginPath(); // Start a new path
  ctx.moveTo(x1, y1); // Move the pen to (30, 50) 
  ctx.lineTo(x2, y2); // Draw a line to (150, 100)
  ctx.lineWidth = 0.1;
  ctx.stroke(); // Render the path
};

const drawLineWithPoints = (ctx: CanvasRenderingContext2D, p1: Point, p2: Point) => {
  drawLine(ctx, p1.x, p1.y, p2.x, p2.y);
}
// console.log("noise: ", noise);
const selectTile = (e: MouseEvent) => {
  console.log("e.x: ", e.clientX, "e.y: ", e.clientY);
  // console.log("e: ", e);
  // a,b,c,d are four points we're drawing on the screen
  // they represent the corners of the currently selected tile
  let a = boardSpaceToScreenSpace({x: 0, y: 0}, {x: 0, y: 0}, {x:1,y:1});
  let b = boardSpaceToScreenSpace({x: 0, y: 1}, {x: 0, y: 0}, {x:1,y:1});
  let c = boardSpaceToScreenSpace({x: 1, y: 1}, {x: 0, y: 0}, {x:1,y:1});
  let d = boardSpaceToScreenSpace({x: 1, y: 0}, {x: 0, y: 0}, {x:1,y:1});
  const ctx = getContext();
  console.log(a, b, c, d);
  drawLineWithPoints(ctx, a, b);
  drawLineWithPoints(ctx, b, c);
  drawLineWithPoints(ctx, c, d);
  drawLineWithPoints(ctx, d, a);
  // return {x: e.clientX, y: e.clientY}
}
/** */
const setupCanvasHandlers = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.addEventListener("click", selectTile);

}
const getContext = (): CanvasRenderingContext2D => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  return ctx;
}
const getCanvas = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  return canvas;
}
const render = () => {
  const grass = document.getElementById('grass') as HTMLImageElement;
  const water = document.getElementById('water') as HTMLImageElement;
  const sand = document.getElementById('sand') as HTMLImageElement;
  const snow = document.getElementById('snow') as HTMLImageElement;
  const tileType: HTMLImageElement[] = [water, sand, grass, snow, snow]

  const makeLevelData2D = (rowMax: number, colMax: number) => {
    let levelData2D: number[][] = [];
    for (let i = 0; i < rowMax; i++) { // rows
      let rows: number[] = [];
      for (let j = 0; j < colMax; j++) {
        let value = noise.simplex2(i / 100, j / 100);
        value = Math.abs(value) * 256;

        rows.push(perlinMap(value));

      }
      levelData2D.push(rows);
    }
    return levelData2D

  }

  const levelData2D = makeLevelData2D(BOARDHEIGHT, BOARDWIDTH);
  let centerX = player.x;
  let centerY = player.y;
  let viewportWidth = 5;
  let viewportHeight = 5;
  let startX = clamp(0, levelData2D.length - 1, centerX - viewportWidth);
  let endX = clamp(0, levelData2D.length - 1, centerX + viewportWidth);
  let startY = clamp(0, levelData2D[0].length - 1, centerY - viewportHeight);
  let endY = clamp(0, levelData2D[0].length - 1, centerY + viewportHeight);
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  // const canvas = getCanvas();
  // const ctx = getContext();
  // TODO - make it suck less by only drawing a rhombus around the area drawn 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let screenI = 0;
  for (let i = startX; i <= endX; i++) {
    let screenJ = 0;
    for (let j = startY; j <= endY; j++) {
      const tile = levelData2D[i][j];
      const asset = tileType[tile];
      // console.log("tile: ", tile);
      // console.log("asset: ", asset);
      let xOffset = (BOARDWIDTH / 4) * 50;
      let yOffset = 0;
      let cartX = screenI * 50;
      let cartY = screenJ * 50;
      let isoX = cartX - cartY;
      let isoY = (cartX + cartY) / 2;
      // console.log("asset: ", asset);
      ctx.drawImage(asset, isoX + xOffset, isoY + yOffset)
      screenJ++
    }
    screenI++
  }
}

const clamp = (min: number, max: number, value: number): number => {
  if (value < min) { return min }
  if (value > max) { return max }
  return value
}


const gameStart = () => {
  // improve name of this function
  setupCanvasHandlers();
  const seed = Math.random();
  noise.seed(seed);
  render();
}
// console.log("document.readyState: ", document.readyState);

window.addEventListener("load", function(){
  gameStart();
});


// class Node {
//     value: Location;
//     next: Node | null;

//     constructor(value: Location) {
//       this.value = value,
//       this.next = null
//     }

//     appendNodeToTail(location: Location) {
//       const end:Node = new Node(location)
//       let n:Node = this;
//       while(n.next !== null){
//           n = n.next;
//       }
//       n.next = end;
//     }
//   }
//   class Location {
//       x: number
//       y: number
//       constructor(x: number, y:number){
//           this.x = x,
//           this.y = y;
//       }
//     }

// let test:Location = new Location(0,0);

// let head:Node = new Node(test);

// head.appendNodeToTail(test);




