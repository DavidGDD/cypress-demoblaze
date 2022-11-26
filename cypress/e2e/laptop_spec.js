import laptops from '../pageObjects/blazedemo_laptops';
import cart from '../pageObjects/blazedemo_cart';

describe('Laptop Shop', function () {
  it('Should add to Cart a laptop and delete', function () {
    laptops.actions.visit();
    laptops.actions.navigateToLaptop();
    laptops.actions.selectFirstLaptopToCart();
    cart.actions.visit();
    cart.actions.checkOneItemInCart();
    cart.actions.deleteFirstItem();
    cart.actions.checkNoItemsInCart();
  })
})
