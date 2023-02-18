// we can redeclare the variable using var and it can be modified anywhere.

let a = "1"; //example- taking var value as 1

// now changing var value in block

{
  let a = "2";
  console.log(a);
}

console.log(a);

// taking another log to print old value.
// hence the value will show 2 two times because a has been redeclared under block.
//but if we change identifier into let, then the result will show 2 and 1 as in 9th line it was printed as 2 and then 1 in last line.