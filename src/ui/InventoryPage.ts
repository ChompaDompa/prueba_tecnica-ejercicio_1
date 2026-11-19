import { equals } from '@serenity-js/assertions';
import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export class InventoryPage {
    static items = () =>
        PageElements.located(By.css('[data-test="inventory-item"]')).describedAs('inventory items');

    static itemNamed = (productName: string) =>
        InventoryPage.items()
            .where(Text.of(PageElement.located(By.css('[data-test="inventory-item-name"]'))), equals(productName))
            .first()
            .describedAs(`"${ productName }" product`);

    static addToCartButtonFor = (productName: string) =>
        PageElement.located(By.css('button[data-test^="add-to-cart"]'))
            .of(InventoryPage.itemNamed(productName))
            .describedAs(`"Add to cart" button for "${ productName }"`);
}
