import { createStore, update } from 'nanostores';
import { createPersistentStore } from '@nanostores/persistent'

const schema = { title: "", thumbnail: "", price: "", quantity: "", finalPrice: "" }

const product = createStore(() => {
    update(product, value => schema)
})

const shoppingCart = createPersistentStore('cart', [],
    {
        encode(origin) {
            return JSON.stringify(origin)
        },
        decode(encoded) {
            return JSON.parse(encoded)
        }
    }
)

const addProduct = function addProduct(newProduct) {
    update(product, value => newProduct);
    update(shoppingCart, card => [...card, newProduct])
};

const deletProduct = function deletProduct(cart, index) {
    const newCart = cart.filter((item, i) => i !== index)
    update(shoppingCart, card => newCart)
}


export { product, shoppingCart, addProduct, deletProduct }