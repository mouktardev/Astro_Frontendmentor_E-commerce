import { createStore, update } from 'nanostores';

const price = createStore(() => {
    price.set("$0.00");
});

function calculatePrice(count, money) {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', });
    const totalPrice = count * Number(money.replace(/[^0-9\.]+/g, ""));
    update(price, value => formatter.format(totalPrice));
}


export { price, calculatePrice };