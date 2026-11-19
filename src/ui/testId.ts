import { By } from '@serenity-js/web';

/** Locates elements by the data-test attribute that saucedemo.com exposes on every relevant element. */
export const testId = (id: string) =>
    By.css(`[data-test="${ id }"]`);
