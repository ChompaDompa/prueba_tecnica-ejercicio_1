import { By, PageElement, PageElements } from '@serenity-js/web';

export class CartPage {
    static itemNames = () =>
        PageElements.located(By.css('[data-test="cart-list"] [data-test="inventory-item-name"]'))
            .describedAs('names of products in the cart');

    static checkoutButton = () =>
        PageElement.located(By.css('[data-test="checkout"]')).describedAs('checkout button');
}
