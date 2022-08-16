function fib(n) {
  let a = 0;
  let b = 1;

  let arr = [a];

  for(let i = 1; i < n; i++) {
    const temp = b;
    b += a;
    a = temp;
    arr.push(temp)
  }
  return console.log(arr)
}

fib(8)

function fibsRec(n, arr = [0, 1]) {
  if(n == 0) {
    arr = [0]
    return console.log(arr.length - 2);
  } else if(n === 1) {
    return console.log(arr);
  } else if (n > 2) {
    let a = arr[arr.length - 2];
    let b = arr[arr.length - 1];
    arr.push(a + b);
    console.log(arr);
    return fibsRec(n - 1, arr);
  }
}

fibsRec(8)