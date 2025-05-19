/*Fibonacci*/
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

/**Merge sort */

let array = [3, 2, 1, 13, 8, 5, 0, 1, 2];
mergeSort(array);

function mergeSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      let placeHolder = arr[0];
      arr[0] = arr[1];
      arr[1] = placeHolder;
      console.log(arr);
      return arr;
    }
    return;
  }
  let middleIndex = Math.ceil(arr.length / 2); //Find the middle index to seperate the array
  let leftHalf = arr.splice(0, middleIndex);
  mergeSort(arr);
  mergeSort(leftHalf);
}
