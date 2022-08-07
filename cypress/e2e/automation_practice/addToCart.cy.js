/// <reference types="cypress" />
import {MainPage} from "../page_objects/main-page"

context('e-shop go to', () => {
    var productsPrice;
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
        cy.get(".price.product-price").first().invoke('text').as('productPrice');
    })

    describe('test',() => {
        it('add to Cart', () => {
            MainPage.openWomenCategory();
            MainPage.checkIfWomenCategoryIsOpen();
            let firstPrice = MainPage.addElementToCartByIdAndGetPrice(4);
            MainPage.clickContinueShopping();
            let SecondPrice = MainPage.addElementToCartByIdAndGetPrice(6);
            MainPage.clickProccedShopping();
            MainPage.checkIfSummaryIsOpen();
            MainPage.checkIfProductsPriceIsEqual(1, firstPrice);
            MainPage.checkIfProductsPriceIsEqual(2, SecondPrice);
            let total = Number(firstPrice.substring(1)) + Number(SecondPrice.substring(1));
            total = "$" + total.toFixed(2);
            MainPage.checkIfTotalPriceIsEqual(total);
        })
    })
})