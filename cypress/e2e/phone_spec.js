import phones from '../pageObjects/blazedemo_phones';
import cart from '../pageObjects/blazedemo_cart';

describe('Phone Shop', function () {
  it('Should add to Cart a random phone', function () {
    phones.actions.visit();
    phones.actions.navigateToPhones();
    phones.actions.selectRandomPhone();
    phones.actions.addPhoneToCart();
    cart.actions.visit();
    cart.actions.checkOneItemInCart();
    cart.actions.fillPlaceOrder();
    cart.actions.purchase();
  })
})
