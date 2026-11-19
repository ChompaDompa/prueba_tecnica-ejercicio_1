import type { User } from '../../src/models';

export const standardUser: User = {
    username: process.env.SAUCE_USERNAME || 'standard_user',
    password: process.env.SAUCE_PASSWORD || 'secret_sauce',
};
