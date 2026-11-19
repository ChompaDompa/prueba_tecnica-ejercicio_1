import { By, PageElement } from '@serenity-js/web';

export class Header {
    static shoppingCartLink = () =>
        PageElement.located(By.css('[data-test="shopping-cart-link"]')).describedAs('shopping cart link');

    static shoppingCartBadge = () =>
        PageElement.located(By.css('[data-test="shopping-cart-badge"]')).describedAs('shopping cart badge');

    static pageTitle = () =>
        PageElement.located(By.css('[data-test="title"]')).describedAs('page title');
}
