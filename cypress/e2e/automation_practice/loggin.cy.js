import {MainPage} from "../page_objects/main-page"

context('e-shop go to', () => {

    var data;
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
        cy.fixture('login').then((users) => {
            data = users;
        })
    })

    describe('test', () => {
        var i = 0;
        Cypress._.times(2, () => {
            it('should open Sign in', () => {
                MainPage.clickSignIn();
                MainPage.setEmail(data[Object.keys(data)[i]].email);
                MainPage.setPassword(data[Object.keys(data)[i]].password);
                MainPage.clickSubmitLogin();
                i++;
            })
        })
    })
})