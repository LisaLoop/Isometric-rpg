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

const render = () => {
  const grass = document.getElementById('grass') as HTMLImageElement;
  const water = document.getElementById('water') as HTMLImageElement;
  const tileType: HTMLImageElement[] = [grass, water]
  const levelData2D: number[][] = [[1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1]];
  
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  for (let i = 0; i < levelData2D.length; i++) { // row
    for (let j = 0; j < levelData2D[i].length; j++) {
      const tile = levelData2D[i][j]; // 0 grass or 1 water
      const asset = tileType[tile]; // anything else undefined
      // console.log("tile: ", tile);
      // console.log("asset: ", asset);
      let cartX = i * 50 + 500;
      let cartY = j * 50; 
      let isoX = cartX - cartY;
      let isoY = (cartX + cartY) / 2;
      ctx.drawImage(asset, isoX, isoY)
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




