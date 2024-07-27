// async function getData() {
//   return "Himanshu Yadav";
// }

// const dataPromise = getData();
// dataPromise.then((response)=>{
//     console.log("response", response)
// })

// const promise = new Promise((resolve ,  reject) => {
//     resolve("promise is resolved!")
// })

//  function getData(){
//     return promise;
// }

// const response = getData()
// console.log(response);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise is resolved");
    resolve({ name: "Himanshu yadav", email: "himan9714@gmail.com" });
    reject("Error: something went wrong");
  }, 1000);
})
  .then((res) => {
    return res;
  })
  .then((response) => {
    console.log("promise chaining is done: ", response);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((res) => {
    console.log(res);
  });

//   Promise all syntax

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1 has resolved!");
    resolve(10);
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2 has resolved!");
    resolve(20);
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 3 has resolved!");
    resolve(39);
  }, 3000);
});

let total = 0;
Promise.all([p1, p2, p3])
  .then((response) => {
    for (var i in response) {
      total += response[i];
    }
    console.log(response);
    console.log("total: ", total);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    res.forEach((res) => {
        console.log(res.status)
        console.log(res.value)
    });
  })
  .catch((err) => {
    console.log(err);
  });
