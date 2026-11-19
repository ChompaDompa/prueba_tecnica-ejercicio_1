import { By, PageElement } from '@serenity-js/web';

export class CheckoutCompletePage {
    static confirmationHeader = () =>
        PageElement.located(By.css('[data-test="complete-header"]')).describedAs('order confirmation header');

    static confirmationText = () =>
        PageElement.located(By.css('[data-test="complete-text"]')).describedAs('order confirmation text');
}
