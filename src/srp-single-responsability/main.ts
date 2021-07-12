import { Messaging } from './services/messaging';
import { Order } from './entitles/order';
import { Persistency } from './services/persistency';
import { Product } from './entitles/product';
import { ShoppingCart } from './entitles/shopping-cart';

const shopCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shopCart, messaging, persistency);

shopCart.addItem(new Product('camiseta', 49.9));
shopCart.addItem(new Product('caderno', 19.9));
shopCart.addItem(new Product('caneta', 3.9));

console.log(shopCart.items);
console.log(shopCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
