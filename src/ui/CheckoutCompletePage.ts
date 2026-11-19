import { PageElement } from '@serenity-js/web';

import { testId } from './testId';

export class CheckoutCompletePage {
    static confirmationHeader = () =>
        PageElement.located(testId('complete-header')).describedAs('order confirmation header');
}
