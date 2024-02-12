const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');

function createPromise(event, position, delay) {
  event.preventDefault();
  delay = parseInt(delayInput.value);
  let step = parseInt(stepInput.value);
  let amount = parseInt(amountInput.value);
  let result = 0;
  event.preventDefault();
  for (let i = 1; i <= amount; i++) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          // Fulfill
          console.log('tak');
        } else {
          // Reject
          console.log('nie');
        }
      }, result);
    });
  }
}

form.addEventListener('submit', createPromise);
