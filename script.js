function fibs(num) {
  let array = [];
  for (let x = 0; x < num; x++) {
    if (x <= 1) {
      array.push(1);
    } else {
      array.push(array[x - 1] + array[x - 2]);
    }
  }
  return array;
}

function fibsRec(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibsRec(num - 1) + fibsRec(num - 2);
  }
}

console.log(fibsRec(5));
console.log(fibs(5));
