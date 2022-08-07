/// <reference types="cypress" />
import { MainPage } from "../page_objects/main-page"

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('Adding to cart from json', () => {
        let data;
        before(() => {
            cy.fixture("products").then((productData) => {
                data = productData;
            })
        })
        it('Should add 2 products by name from json to cart', () => {
            MainPage.openWomenCategory();
            MainPage.checkIfWomenCategoryIsOpen();
            MainPage.addElementToCartByName(data[0].name);
            MainPage.clickContinueShopping();
            MainPage.addElementToCartByName(data[1].name);
            MainPage.clickProccedShopping();
            MainPage.checkIfSummaryIsOpen();
            MainPage.checkIfProductsPriceIsEqual(1, "$" + data[0].price.toFixed(2));
            MainPage.checkIfProductsPriceIsEqual(2, "$" + data[1].price.toFixed(2));
            let total = data[0].price + data[1].price
            total = "$" + total.toFixed(2);
            MainPage.checkIfTotalPriceIsEqual(total);
        })
    })
})