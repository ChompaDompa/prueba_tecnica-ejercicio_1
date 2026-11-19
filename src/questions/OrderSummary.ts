import { Text } from '@serenity-js/web';

import { CheckoutOverviewPage } from '../ui';

export class OrderSummary {
    static productNames = () =>
        Text.ofAll(CheckoutOverviewPage.itemNames())
            .describedAs('names of products in the order summary');

    static itemTotal = () =>
        Text.of(CheckoutOverviewPage.itemTotalLabel())
            .as(label => Number(label.replace(/[^0-9.]/g, '')))
            .describedAs('item total of the order');
}
