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
console.log(fibsRec(10));

/**Merge sort */

let array = [3, 2, 1, 13, 8, 5, 0, 1];
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
  let sortedArray = [];
  let length = newLeftHalf.length + newRightHalf.length;
  for (let index = 0; index < length; index++) {
    if (newRightHalf[0] < newLeftHalf[0] || newLeftHalf.length === 0) {
      sortedArray[index] = newRightHalf.shift();
    } else {
      sortedArray[index] = newLeftHalf.shift();
    }
  }
  return sortedArray;
}
