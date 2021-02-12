declare var noise: any
/*
  factory,
  farm,
  coal mine
  electric station,
  power plant

{
  type:factory,
  x: 0,
  y: 0,
  produce: true, 
  consume: true,
}

*/

/*
 - TODO: 
 - Left goes left, right goes right
 - increase the map size to 512
 - change the x and y offsets so that the actual starting points of the map are outside of the screen 
 - tile click - when the user clicks on the canvas we need to know what tile was clicked and it needs to be
  highlited. 
 - randomly spawn factories, producer/consumers, make tiles from the buildings
 - randonly spawn trees
 - write a function that converts 0,1,2,3 to tile names 

 */
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
const player = { x: BOARDWIDTH/2, y: BOARDHEIGHT/2 }

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }

  switch (event.code) {
    case "KeyS":
    case "ArrowDown":
      // Handle "DOWN"
      player.y = clamp(5, BOARDHEIGHT-5-1, player.y + 1);
      break;
    case "KeyW":
    case "ArrowUp":
      // Handle "UP"
      player.y = clamp(5, BOARDHEIGHT-5-1, player.y - 1);
      break;
    case "KeyA":
    case "ArrowLeft":
      // Handle "turn left"
      player.x = clamp(5, BOARDWIDTH-5-1, player.x - 1);
      break;
    case "KeyD":
    case "ArrowRight":
      // Handle "turn right"
      player.x = clamp(5, BOARDWIDTH-5-1, player.x + 1);
      break;
  }

  render();

  // Consume the event so it doesn't get handled twice
  event.preventDefault();
}, true);



// const keydown = (body: HTMLBodyElement, event: Event ) => {

//   // event.keycode
//   // WASD
// }

// console.log("noise: ", noise);

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
      let xOffset = (BOARDWIDTH/4) * 50;
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
  const seed = Math.random();
  noise.seed(seed);
  render();
}


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




