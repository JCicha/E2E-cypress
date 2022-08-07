import {MainPage} from "../page_objects/main-page"


context('e-shop go to', () => {
    let data;
    beforeEach(() => {
        MainPage.openAutomationPracticePage();
        cy.fixture('logginIn').then((users) =>{
            data = users;
        })
    })

    describe('test',() => {
        let i = 0;
        Cypress._.times(2, () => {
            it('should open Sign in', () => {
                MainPage.clickLogin();
                MainPage.setEmail(data[Object.keys(data)[i]].email);
                MainPage.setPassword(data[Object.keys(data)[i]].password);
                MainPage.clickSubmitLogin();
                i++;
            })
        })
    })
})