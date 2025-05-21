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

let array = [5, 3, 1, 2, 4];
console.log(mergeSort(array));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      let placeHolder = arr[0];
      arr[0] = arr[1];
      arr[1] = placeHolder;
      return arr;
    }
  }
  let middleIndex = Math.ceil(arr.length / 2); //Find the middle index to seperate the array
  let leftHalf = arr.splice(0, middleIndex);
  let newLeftHalf = mergeSort(leftHalf);
  let newRightHalf = mergeSort(arr);
  for (let index = 0; index < newLeftHalf.length; index++) {
    if (newRightHalf[0] < newLeftHalf[index]) {
      let placeHolder = newRightHalf[0];
      newRightHalf[0] = newLeftHalf[index];
      newLeftHalf[index] = placeHolder;
    }
  }
  return newLeftHalf.concat(newRightHalf);
}
