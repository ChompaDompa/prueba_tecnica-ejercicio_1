import { Text } from '@serenity-js/web';

import { CartList, CheckoutOverviewPage } from '../ui';

export class OrderSummary {
    static productNames = () =>
        Text.ofAll(CartList.itemNames())
            .describedAs('names of products in the order summary');

    static itemTotal = () =>
        Text.of(CheckoutOverviewPage.itemTotalLabel())
            .as(parsePrice)
            .describedAs('item total of the order');
}

function parsePrice(label: string): number {
    const match = label.match(/\$(\d+(?:\.\d+)?)/);

    if (! match) {
        throw new Error(`Could not find a price in "${ label }"`);
    }

    return Number(match[1]);
}
