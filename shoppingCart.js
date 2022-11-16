console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`You ordered ${quantity} ${product}${quantity == 1 ? '' : "'s"}`);
};

export const productPrice = 40;
const totalQuantity = 23;

// export { productPrice, totalQuantity as qty };

// export default function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`You ordered ${quantity} ${product}${quantity == 1 ? '' : "'s"}`);
// }

// export default 40;
