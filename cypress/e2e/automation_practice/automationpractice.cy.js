import {MainPage} from "../page_objects/main-page"

context('e-shop go to', () => {
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
    })

    describe('menu bar', () => {
        it('should open category: Women', () => {
            MainPage.clickCategory('Women');
            WomenPage.checkIfWomenCategoryisOpen();
        })

        it('should open cart page', () => {
            MainPage.clickShoppingCart();
            ShoppingCart.checkIfShoppingCartisOpen();
        })
    })

})