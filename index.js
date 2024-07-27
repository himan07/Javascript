let day = "";

switch (day) {
  case "monday":
    console.log("go for meetings");
    break;
  case "tuesday":
    console.log("go to client site");
    break;
  case "wednesday":
    console.log("write the code");
    break;
  case "thursday":
    console.log("optimise the code ");
    break;
  case "friday":
    console.log("celebrate the weekend!");
    break;
  case "saturday":
    console.log("take rest");
    break;
  case "sunday":
    console.log("go and sleep whole day");
    break;
  default:
    console.log("Enter a valid day");
}

for (i = 1; i <= 10; i++) {
  console.log(`loop is working ${i}!`);
}

let types = [];
const JonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "Teacher",
  ["Michal", "Peter", "Stevan"],
];

for (i = 0; i < JonasArray.length; i++) {
  console.log(JonasArray[i], typeof JonasArray[i]);

  types[i] = typeof JonasArray[i];
}

console.log("types of arrays: ", types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}

console.log("ages: ", ages);

// Looping backwards and loop in loops
const JonasA = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "Teacher",
  ["Michal", "Peter", "Stevan"],
];

for (let i = JonasA.length - 1; i >= 0; i--) {
  console.log(i, JonasA[i]);
}

// create loop inside another loop

for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`_____Starting Excercise ${excercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repitition ${rep}`);
  }
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE:Lifting weight repitition ${rep}`);
  rep++;
}

let dice;

while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled a dice ${dice}`);
  if (dice === 6) console.log("Loop is about to end...");
}
