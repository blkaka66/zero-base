function makeSnail(n) {
    const snail = new Array(n).fill().map(() => new Array(n).fill(0));
    let num = 1;
    let row = 0;
    let col = -1;
  
    for (let i = 0; i < 2 * n - 1; i++) {
      for (let j = 0; j < Math.floor((2 * n - 1 - i) / 2); j++) {
        if (i % 4 === 0) col++;
        else if (i % 4 === 1) row++;
        else if (i % 4 === 2) col--;
        else row--;
        snail[row][col] = num;
        num++;
      }
    }
    console.log(snail);
  }
  makeSnail(5);