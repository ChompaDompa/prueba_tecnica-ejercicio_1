import { PageElement } from '@serenity-js/web';

import { testId } from './testId';

export class LoginPage {
    static usernameField = () =>
        PageElement.located(testId('username')).describedAs('username field');

    static passwordField = () =>
        PageElement.located(testId('password')).describedAs('password field');

    static loginButton = () =>
        PageElement.located(testId('login-button')).describedAs('login button');
}
