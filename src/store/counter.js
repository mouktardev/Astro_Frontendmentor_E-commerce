import { createStore, update, getValue } from 'nanostores';

const counter = createStore(() => {
    counter.set(0);
});

function increaseCounter() {
    update(counter, value => value + 1)
}

function decreaseCounter() {
    if (getValue(counter) > 0) update(counter, value => value - 1);
}


export { counter, increaseCounter, decreaseCounter };