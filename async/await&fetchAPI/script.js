// async function getData() {
//     // Simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }


async function getData() {
    // json placeholder copied
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data = await x.json()
    console.log(data)
    
}

// settle means resolve or reject

// resolve means promises has settled successfully
// reject means promises has not settled successfully
// fetch api return promises in this process its bring data after that parse with json
// async means above function will continue its process in backround
// await must be use in async function

async function main() {
  console.log("Loading module");

  console.log("Do something else");

  console.log("Load Data");

  let data = await getData();

  console.log(data);

  console.log("process data");

  console.log("task 2");
}
main();
// data.then((v)=>{

// console.log(data)

// console.log("process data")

// console.log("task 2")
// })
