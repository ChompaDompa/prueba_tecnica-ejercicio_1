import { Text } from '@serenity-js/web';

import { CheckoutCompletePage } from '../ui';

export class OrderConfirmation {
    static header = () =>
        Text.of(CheckoutCompletePage.confirmationHeader())
            .describedAs('order confirmation header');
}
