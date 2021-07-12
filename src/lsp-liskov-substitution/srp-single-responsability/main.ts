/*
 Liskov substitution principle -
 se phi(x) é uma propriedade demonstrável dos objetos x  de tipo T.
 Então phi(y) deve ser verdadeiro para objetos y de tipo S on de S é um subtipo de T.

 Mais simples: subtipos precisam ser substituiveis por seus tipos de base.

 Mais simples ainda: se meu programa espera um Animal, algo do tipo Cachorro(que herda de animal)
 deve servir como qualquer outro Animal.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shopCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shopCart, messaging, persistency);

shopCart.addItem(new Product('camiseta', 49.9));
shopCart.addItem(new Product('caderno', 19.9));
shopCart.addItem(new Product('caneta', 3.9));

console.log(shopCart.items);
console.log(shopCart.total());
console.log(shopCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
