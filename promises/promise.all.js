const promise1 = Promise.resolve(300); // Promise {<fulfilled>: 300}

const promise2 = 42; // 42

// Promise {<fulfilled>: 'promise resolved'}
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'promise resolved');
});

// Promise {<rejected>: 'promise rejected'}
const promise4 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'promise rejected');
});

// [300, 42, 'promise resolved']
Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values);
});

// promise rejected
Promise.all([promise1, promise4, promise3])
  .then(values => {
    console.log(values);
  })
  .catch(error => console.log(error));

