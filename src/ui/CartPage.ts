import { PageElement } from '@serenity-js/web';

import { testId } from './testId';

export class CartPage {
    static checkoutButton = () =>
        PageElement.located(testId('checkout')).describedAs('checkout button');
}
