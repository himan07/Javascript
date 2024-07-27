let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(...arr);

// for each loop

const movement = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const element of movement) {
  //   console.log(element);
}

movement.forEach((movement, index, arr) => {
  console.log("using foreach: movement- ", movement);
  console.log("using foreach: index- ", index);
  console.log("using foreach: arr- ", arr);
});
