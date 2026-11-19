import { By, PageElements } from '@serenity-js/web';

/** Product list shared by the cart page and the checkout overview page. */
export class CartList {
    static itemNames = () =>
        PageElements.located(By.css('[data-test="cart-list"] [data-test="inventory-item-name"]'))
            .describedAs('names of products in the list');
}
