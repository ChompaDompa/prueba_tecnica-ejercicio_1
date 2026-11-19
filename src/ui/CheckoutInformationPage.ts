import { PageElement } from '@serenity-js/web';

import { testId } from './testId';

export class CheckoutInformationPage {
    static firstNameField = () =>
        PageElement.located(testId('firstName')).describedAs('first name field');

    static lastNameField = () =>
        PageElement.located(testId('lastName')).describedAs('last name field');

    static postalCodeField = () =>
        PageElement.located(testId('postalCode')).describedAs('postal code field');

    static continueButton = () =>
        PageElement.located(testId('continue')).describedAs('continue button');
}
