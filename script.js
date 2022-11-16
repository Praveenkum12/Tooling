// import * as ShoppingCart from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';
console.log('importing module');
// // add('pizza', 4);
// console.log(ShoppingCart.productPrice);

// ShoppingCart.addToCart('pizza', 4);
// ShoppingCart.addToCart('bread', 3);
// ShoppingCart.addToCart('apples', 5);

// // console.log('Start fetching');

// const getLastPost = async function () {
//   const res = await fetch('http://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
//   // console.log(genZ);
// };

// const lastPost = await getLastPost();
// console.log(lastPost);

// console.log('Start fetching');
// console.log('End fetching');

const Shoppingcart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `You ordered ${quantity} ${product}${quantity == 1 ? '' : "'s"}`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

Shoppingcart2.addToCart('apple', 3);
console.log(Shoppingcart2.cart);

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};
const stateClone = { ...state };
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

// if (module.hot) {
//   module.hot.accept();
// }
