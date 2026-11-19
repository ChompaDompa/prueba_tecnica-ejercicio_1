import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import { CheckoutOverviewPage } from '../ui';

export class FinishOrder {
    static now = () =>
        Task.where(`#actor finishes the order`,
            Click.on(CheckoutOverviewPage.finishButton()),
        );
}
