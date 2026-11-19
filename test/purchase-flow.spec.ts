import { Ensure, equals, matches } from '@serenity-js/assertions';
import { describe, it } from '@serenity-js/playwright-test';
import { Page } from '@serenity-js/web';

import { OrderConfirmation, OrderSummary, ShoppingCart } from '../src/questions';
import { AddProductsToCart, FinishOrder, Login, ProvideCheckoutInformation, ViewCart } from '../src/tasks';
import { backpack, bikeLight, customer, standardUser, totalPriceOf } from './data';

describe('Purchase flow', () => {

    it('allows a standard user to buy two products', async ({ actor }) => {
        await actor.attemptsTo(
            Login.withCredentials(standardUser),
            Ensure.that(Page.current().url().pathname, equals('/inventory.html')),

            AddProductsToCart.called(backpack.name, bikeLight.name),
            Ensure.that(ShoppingCart.badgeCount(), equals(2)),

            ViewCart.contents(),
            Ensure.that(Page.current().url().pathname, equals('/cart.html')),
            Ensure.that(ShoppingCart.productNames(), equals([ backpack.name, bikeLight.name ])),

            ProvideCheckoutInformation.of(customer),
            Ensure.that(Page.current().url().pathname, equals('/checkout-step-two.html')),
            Ensure.that(OrderSummary.productNames(), equals([ backpack.name, bikeLight.name ])),
            Ensure.that(OrderSummary.itemTotal(), equals(totalPriceOf(backpack, bikeLight))),

            FinishOrder.now(),
            Ensure.that(Page.current().url().pathname, equals('/checkout-complete.html')),
            Ensure.that(OrderConfirmation.header(), matches(/^thank you for your order!?$/i)),
        );
    });
});
