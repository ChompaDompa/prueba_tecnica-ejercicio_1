import { Text } from '@serenity-js/web';

import { CartPage, Header } from '../ui';

export class ShoppingCart {
    static badgeCount = () =>
        Text.of(Header.shoppingCartBadge())
            .as(Number)
            .describedAs('number of items on the shopping cart badge');

    static productNames = () =>
        Text.ofAll(CartPage.itemNames())
            .describedAs('names of products in the cart');
}
