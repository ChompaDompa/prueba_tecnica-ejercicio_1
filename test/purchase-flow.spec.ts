import { Ensure, equals, matches } from '@serenity-js/assertions';
import { describe, it } from '@serenity-js/playwright-test';
import { Page } from '@serenity-js/web';

import { OrderConfirmation, OrderSummary, ShoppingCart } from '../src/questions';
import { AddProductsToCart, FinishOrder, Login, ProvideCheckoutInformation, ViewCart } from '../src/tasks';
import { backpack, bikeLight, customer, standardUser, totalPriceOf } from './data';

describe('Purchase flow', () => {

    it('allows a standard user to buy two products', async ({ actor }) => {
        const products = [ backpack, bikeLight ] as const;
        const productNames = products.map(({ name }) => name);

        await actor.attemptsTo(
            Login.as(standardUser),
            Ensure.eventually(Page.current().url().pathname, equals('/inventory.html')),

            AddProductsToCart.of(...products),
            Ensure.eventually(ShoppingCart.badgeCount(), equals(products.length)),

            ViewCart.contents(),
            Ensure.eventually(Page.current().url().pathname, equals('/cart.html')),
            Ensure.eventually(ShoppingCart.productNames(), equals(productNames)),

            ProvideCheckoutInformation.of(customer),
            Ensure.eventually(Page.current().url().pathname, equals('/checkout-step-two.html')),
            Ensure.eventually(OrderSummary.productNames(), equals(productNames)),
            Ensure.eventually(OrderSummary.itemTotal(), equals(totalPriceOf(...products))),

            FinishOrder.now(),
            Ensure.eventually(Page.current().url().pathname, equals('/checkout-complete.html')),
            Ensure.eventually(OrderConfirmation.header(), matches(/^thank you for your order!?$/i)),
        );
    });
});
