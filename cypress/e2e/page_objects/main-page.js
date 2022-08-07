export class MainPage {
    static openAutomationPracticePage() {
        cy.visit(" http://automationpractice.com/index.php?");
    }
    static clickLogin() {
        cy.get(".login").contains("Sign in").click();
    }

    static setEmail(email) {
        cy.get("#email").type(email, {force: true});
    }

    static setPassword(password) {
        cy.get("#passwd").type(password, {force: true});
    }

    static clickSubmitLogin() {
        cy.get("#SubmitLogin").contains("Sign in").click();
    }

    static openWomenCategory() {
        cy.get('#block_top_menu').contains("Women").click();
    }

    static checkIfWomenCategoryIsOpen() {
        cy.url().should('eq', 'http://automationpractice.com/index.php?id_category=3&controller=category');
    }

    static clickProccedShopping() {
        cy.wait(6000);
        cy.get('.button-medium').contains("Proceed").click();
    }

    static checkIfSummaryIsOpen() {
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=order');
    }

    static clickContinueShopping() {
        while (!cy.get(".clearfix").should('be.visible')) {
        }
        cy.get(".exclusive-medium").contains("Continue shopping").click();
    }

    static addElementToCartByIdAndGetPrice(productId) {
        let price = Cypress.$(`.product_list > :nth-child(${productId}) .price`);
        cy.get(".product_list > :nth-child(" + productId+ ")").contains('Add to cart').click();
        console.log(price[0].innerHTML.trim());
        return price[0].innerHTML.trim();
    }

    static addElementToCartByName(productName) {
        cy.get(".product_list").find(".product-container").contains(productName).parents('.product-container').contains('Add to cart').click();
    }

    static checkIfProductsPriceIsEqual(index, price) {
        cy.get(`#cart_summary > tbody > :nth-child(${index}) > .cart_unit > .price`).find('.price').should('have.text', price);
    }

    static checkIfTotalPriceIsEqual(price) {
        let total = cy.get('#total_product').invoke('text').should('eq', price);
    }

}