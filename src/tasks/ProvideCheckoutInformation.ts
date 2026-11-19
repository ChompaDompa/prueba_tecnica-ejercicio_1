import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';

import { CartPage, CheckoutInformationPage } from '../ui';

interface CustomerDetails {
    firstName: string;
    lastName: string;
    postalCode: string;
}

export class ProvideCheckoutInformation {
    static of = ({ firstName, lastName, postalCode }: CustomerDetails) =>
        Task.where(`#actor checks out as ${ firstName } ${ lastName } (${ postalCode })`,
            Click.on(CartPage.checkoutButton()),
            Enter.theValue(firstName).into(CheckoutInformationPage.firstNameField()),
            Enter.theValue(lastName).into(CheckoutInformationPage.lastNameField()),
            Enter.theValue(postalCode).into(CheckoutInformationPage.postalCodeField()),
            Click.on(CheckoutInformationPage.continueButton()),
        );
}
