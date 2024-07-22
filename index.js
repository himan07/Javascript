// given a string reverse each word in the sentance.

var str = "I am a good boy";

var result = str.split(" ").map((item) => {
  return item.split("").reverse().join("");
});

let finalResult = result.join(" ");
// console.log(finalResult)
