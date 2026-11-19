import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import type { Product } from '../models';
import { InventoryPage } from '../ui';

export class AddProductsToCart {
    static of = (...products: [ Product, ...Product[] ]) =>
        Task.where(`#actor adds ${ products.map(({ name }) => `"${ name }"`).join(' and ') } to the cart`,
            ...products.map(({ name }) =>
                Click.on(InventoryPage.addToCartButtonFor(name)),
            ),
        );
}
