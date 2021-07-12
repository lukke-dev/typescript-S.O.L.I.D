/*
  Interface segregation principle(principio da segregação de interface)
  os clientes não devem ser forçados a depender de types, interfaces ou membros
  abstratos que  não utilizam .
*/

import { Messaging } from './services/messaging';
import { Order } from './interfaces/order';
import { Persistency } from './services/persistency';
import { Product } from './interfaces/product';
import { ShoppingCart } from './interfaces/shopping-cart';
import { NoDiscount } from './interfaces/discount';
import { IndividualCustomer } from './interfaces/interfaces/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shopCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'luiz',
  'miranda',
  '111.111.111-00',
);
// const enterpriseCustomer = new EnterpriseCustomer(
//   'empresa gigante',
//   '222-22-22222222',
// );
const order = new Order(shopCart, messaging, persistency, individualCustomer);

shopCart.addItem(new Product('camiseta', 49.9));
shopCart.addItem(new Product('caderno', 19.9));
shopCart.addItem(new Product('caneta', 3.9));

console.log(shopCart.items);
console.log(shopCart.total());
console.log(shopCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
