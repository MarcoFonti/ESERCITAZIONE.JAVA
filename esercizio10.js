//Tuttavia il codice può essere semplificato. Come possiamo farlo?
/* if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
} */

const order = {};

if (!order.customer?.address?.city) {
  console.log('City is required');
}