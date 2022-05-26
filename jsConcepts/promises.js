// const condition = true;

// const myPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     setTimeout(() => {
//       resolve('I have succeded');
//     }, 500);
//   } else {
//     reject('I have no succeded');
//   }
// })
//   .then(value => value + '!!!!')
//   .then(value => console.log(value))
//   .catch(value => console.log(value));

// It is possible to chain infinite .then()

// fetch returns a promise, which resolve triggers if the api call succes, reject is called otherwise:

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error));
