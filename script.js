function fibs(num) {
  let array = [];
  for (let x = 0; x < num; x++) {
    if (x <= 1) {
      array.push(x);
    } else {
      array.push(array[x - 1] + array[x - 2]);
    }
  }
  console.log(array);
}

function fibsRec(num) {}

fibsRec(8);
fibs(8);
