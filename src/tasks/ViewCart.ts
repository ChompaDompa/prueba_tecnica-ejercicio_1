import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import { Header } from '../ui';

export class ViewCart {
    static contents = () =>
        Task.where(`#actor opens the shopping cart`,
            Click.on(Header.shoppingCartLink()),
        );
}
