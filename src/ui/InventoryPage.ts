import { equals } from '@serenity-js/assertions';
import { By, PageElement, PageElements, Text } from '@serenity-js/web';

import { testId } from './testId';

export class InventoryPage {
    static itemNamed = (productName: string) =>
        PageElements.located(testId('inventory-item'))
            .where(Text.of(PageElement.located(testId('inventory-item-name'))), equals(productName))
            .first()
            .describedAs(`"${ productName }" product`);

    static addToCartButtonFor = (productName: string) =>
        PageElement.located(By.css('button[data-test^="add-to-cart"]'))
            .of(InventoryPage.itemNamed(productName))
            .describedAs(`"Add to cart" button for "${ productName }"`);
}
