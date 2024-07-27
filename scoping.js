let arr = ["abcd", "ef", "ghijkmnop"];

function capitalizeString(arr) {
  return arr.map((str) => {
    if (str.length === 0) return;
    const firstChar = str[0].toUpperCase();
    const lastChar = str[str.length - 1].toUpperCase();
    const middleChar = str.slice(1, -1).toLowerCase();

    return firstChar + middleChar + lastChar;
  });
}

const transformedArr = capitalizeString(arr);
console.log("transformedArr: ", transformedArr);
