import { By, PageElement, PageElements } from '@serenity-js/web';

export class CheckoutOverviewPage {
    static itemNames = () =>
        PageElements.located(By.css('[data-test="cart-list"] [data-test="inventory-item-name"]'))
            .describedAs('names of products in the order summary');

    static itemTotalLabel = () =>
        PageElement.located(By.css('[data-test="subtotal-label"]')).describedAs('item total label');

    static finishButton = () =>
        PageElement.located(By.css('[data-test="finish"]')).describedAs('finish button');
}
