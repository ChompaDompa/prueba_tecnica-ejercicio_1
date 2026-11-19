import { Masked, Task } from '@serenity-js/core';
import { Click, Enter, Navigate } from '@serenity-js/web';

import type { User } from '../models';
import { LoginPage } from '../ui';

export class Login {
    static as = ({ username, password }: User) =>
        Task.where(`#actor logs in as ${ username }`,
            Navigate.to('/'),
            Enter.theValue(username).into(LoginPage.usernameField()),
            Enter.theValue(Masked.valueOf(password)).into(LoginPage.passwordField()),
            Click.on(LoginPage.loginButton()),
        );
}
