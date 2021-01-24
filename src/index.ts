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
 - viewport movement - arrow keys that change the position of the viewport so that you can
 see different places on the map. 
 - tile click - when the user clicks on the canvas we need to know what tile was clicked
 - randomly spawn factories, producer/consumsers, make tiles from the buildings
 - randonly spawn trees
 - write a function that converts 0,1,2,3 to tile names 
 - clamp function to make code more readable
 */
const perlinMap = function (value: number): number {
  if(value >= 0 && value < 80){
    return 0 // water
  }
  if(value >= 80 && value < 100){
    return 1 // coast
  }
  if(value >= 100 && value < 200){
    return 2 // grass
  }
  if(value >= 200 && value < 256){
    return 3 // snow
  }
  else {
    return 4 // error
  }
}


const render = () => {
  const grass = document.getElementById('grass') as HTMLImageElement;
  const water = document.getElementById('water') as HTMLImageElement;
  const sand = document.getElementById('sand') as HTMLImageElement;
  const snow = document.getElementById('snow') as HTMLImageElement;
  const tileType: HTMLImageElement[] = [water, sand, grass, snow, snow]
  noise.seed(Math.random());
  // console.log("noise: ", noise);
  const makeLevelData2D = (rowMax: number, colMax: number) => {
    let levelData2D: number[][] = [];
    for(let i = 0; i < rowMax; i++){ // rows
      let rows: number[] = [];
      for(let j=0; j < colMax; j++){
        let value = noise.simplex2(i / 100, j / 100);
        value = Math.abs(value) * 256;

        rows.push(perlinMap(value));

      }
      levelData2D.push(rows);
    }
    return levelData2D
  }
  const boardHeight = 64;
  const boardWidth = 64;
  const levelData2D = makeLevelData2D(boardHeight, boardWidth);

  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  for (let i = 0; i < levelData2D.length; i++) {
    for (let j = 0; j < levelData2D[i].length; j++) {
      const tile = levelData2D[i][j]; 
      const asset = tileType[tile]; 
      // console.log("tile: ", tile);
      // console.log("asset: ", asset);
      let xOffset = 800;
      let yOffset = -432;
      let cartX = i * 50;
      let cartY = j * 50;
      let isoX = cartX - cartY;
      let isoY = (cartX + cartY) / 2;
      console.log("asset: ", asset);
      ctx.drawImage(asset, isoX + xOffset, isoY + yOffset)
    }
  }
}
const gameStart = () => {
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




