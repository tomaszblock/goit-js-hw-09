const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');

function createPromise(event) {
  event.preventDefault();
  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  let currentDelay = delay; // początkowe opóźnienie

  for (let i = 1; i <= amount; i++) {
    setTimeout(() => {
      new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve();
        } else {
          reject();
        }
      })
        .then(result => {
          console.log(`✅ Fulfilled promise ${i} in ${currentDelay}ms`);
          currentDelay = currentDelay + step;
        })
        .catch(error => {
          console.log(`❌ Rejected promise ${i} in ${currentDelay}ms`);
          currentDelay = currentDelay + step;
        });
    }, currentDelay);
  }
}

// function createPromise(event, position, delay) {
//   event.preventDefault();
//   delay = parseInt(delayInput.value);
//   let step = parseInt(stepInput.value);
//   let amount = parseInt(amountInput.value);
//   let result = 0;
//   for (let i = 1; i <= amount; i++) {
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const shouldResolve = Math.random() > 0.3;
//         if (shouldResolve) {
//           resolve(console.log('tak'));
//         } else {
//           // Reject
//           reject(console.log('nie'));
//         }
//       }, delay);
//     });
//   }
// }

form.addEventListener('submit', createPromise);
