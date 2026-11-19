import { PageElement } from '@serenity-js/web';

import { testId } from './testId';

export class CheckoutOverviewPage {
    static itemTotalLabel = () =>
        PageElement.located(testId('subtotal-label')).describedAs('item total label');

    static finishButton = () =>
        PageElement.located(testId('finish')).describedAs('finish button');
}
