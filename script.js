function stringChop(str, size) {
   let arr = [];

  for(let i = 0;i<str.length;i=i+size)
  {
    arr.push(str.slice(i,size+i));
  }

	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
