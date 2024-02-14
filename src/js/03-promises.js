const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');

form.addEventListener('submit', pushPromise);

function pushPromise(event) {
  event.preventDefault();
  const getDelay = parseInt(delayInput.value);
  const getStep = parseInt(stepInput.value);
  const getAmount = parseInt(amountInput.value);

  for (let i = 0; i < getAmount; i++) {
    createPromise(i + 1, getDelay + i * getStep)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
