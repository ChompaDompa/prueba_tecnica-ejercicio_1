import { By, PageElement } from '@serenity-js/web';

export class CheckoutInformationPage {
    static firstNameField = () =>
        PageElement.located(By.css('[data-test="firstName"]')).describedAs('first name field');

    static lastNameField = () =>
        PageElement.located(By.css('[data-test="lastName"]')).describedAs('last name field');

    static postalCodeField = () =>
        PageElement.located(By.css('[data-test="postalCode"]')).describedAs('postal code field');

    static continueButton = () =>
        PageElement.located(By.css('[data-test="continue"]')).describedAs('continue button');
}
