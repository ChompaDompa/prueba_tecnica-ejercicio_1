import { Task } from '@serenity-js/core';
import { Click, Enter, Navigate } from '@serenity-js/web';

import { LoginPage } from '../ui';

interface Credentials {
    username: string;
    password: string;
}

export class Login {
    static withCredentials = ({ username, password }: Credentials) =>
        Task.where(`#actor logs in as ${ username }`,
            Navigate.to('/'),
            Enter.theValue(username).into(LoginPage.usernameField()),
            Enter.theValue(password).into(LoginPage.passwordField()),
            Click.on(LoginPage.loginButton()),
        );
}
