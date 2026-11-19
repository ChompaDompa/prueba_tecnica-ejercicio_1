import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import { InventoryPage } from '../ui';

export class AddProductsToCart {
    static called = (...productNames: string[]) =>
        Task.where(`#actor adds ${ productNames.map(name => `"${ name }"`).join(' and ') } to the cart`,
            ...productNames.map(productName =>
                Click.on(InventoryPage.addToCartButtonFor(productName)),
            ),
        );
}
