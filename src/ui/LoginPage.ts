import { By, PageElement } from '@serenity-js/web';

export class LoginPage {
    static usernameField = () =>
        PageElement.located(By.css('[data-test="username"]')).describedAs('username field');

    static passwordField = () =>
        PageElement.located(By.css('[data-test="password"]')).describedAs('password field');

    static loginButton = () =>
        PageElement.located(By.css('[data-test="login-button"]')).describedAs('login button');
}
