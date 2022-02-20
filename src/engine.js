// (world: boolean[][]) => boolean[][]
const next = (world) => {
  const nextWorld = world.map(arr => [...arr]);
  for(let col = 0; col< world.length; col++){
    for(let row = 0; row < world[col].length; row++){
      const cell = world[col][row];
      let numberOfNeighbours = 0;

      for(let i = -1; i < 2; i++){
        for(let j = -1; j < 2; j++){
          if(i === 0 && j === 0){
            continue;
          }

          const x_cell = col +i;
          const y_cell = row +j;
          if(x_cell >=0 && y_cell >= 0 && x_cell < worldWidth && y_cell < worldHeight){
            const currentNeighbour = world[col + i][row + j];
            numberOfNeighbours += currentNeighbour;
          }

        }
      }
      if (cell === true && numberOfNeighbours < 2) {
        nextWorld[col][row] = false;
      } else if (cell === true && numberOfNeighbours > 3) {
        nextWorld[col][row] = false;
      } else if (cell === false && numberOfNeighbours === 3) {
        nextWorld[col][row] = true;
      }
    }
  }
  return nextWorld;
};




// (pattern: string) => boolean[][]
const parse = (pattern) => {
  const tempArray = pattern.split("\n");
  let parsedArray = new Array(tempArray.length); 
  for (var i = 0; i < parsedArray.length; i++) {
     parsedArray[i] = tempArray[i].split('');
  }
  for(var x = 0; x < parsedArray.length ; x++){
    for(var y = 0; y < parsedArray[x].length; y++){
      if(parsedArray[x][y] === '.'){
        parsedArray[x][y] = false
      }
      if(parsedArray[x][y] === 'O'){
        parsedArray[x][y] = true
      }
    }
  }
  return parsedArray;
}