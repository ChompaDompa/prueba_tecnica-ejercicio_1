import { PageElement } from '@serenity-js/web';

import { testId } from './testId';

export class Header {
    static shoppingCartLink = () =>
        PageElement.located(testId('shopping-cart-link')).describedAs('shopping cart link');

    static shoppingCartBadge = () =>
        PageElement.located(testId('shopping-cart-badge')).describedAs('shopping cart badge');
}
