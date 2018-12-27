describe('Check Zaptic Login Validation', function () {
    it('Visits Zaptic Homepage', function () {

        // clear cookies and navigate to Zaptic webpage
        cy.clearCookies();
        cy.visitURL();

        // Search for below string on Homepage
        cy.contains('SOPs brought to life');

        // accept cookie message and validate cookie has been added to session
        cy.get('#hs-eu-confirmation-button').click();
        cy.getCookie('__hs_opt_out').should('have.property', 'value', 'no');
    })

    it('Check Login Validation', function () {

        //select login and ensure 'Sign In' button is visible
        cy.get('.hs-menu-item.hs-menu-depth-1:nth-child(4)').click();
        cy.wait(1000);
        cy.get('input.lock').should('be.visible');

        //Submit and check validation message
        cy.get('input.lock').click();
        cy.contains('Please enter a valid email.');

        //Enter random email string into login input field
        cy.get('input[type="text"]:nth-of-type(1)').type('AUTO_incorrectemail' + '@test.com')
        cy.get('input.lock').click(); 

        //password input field displays
        cy.get('input[type="password"]').should('be.visible');

        // input incorrect password
        cy.get('input[type="password"]').type('AUTO_testPassword');
        cy.get('input.lock').click();

        //expect incorrect password validation message
        cy.contains('Invalid email or password.');

        //check no password validation message
        cy.get('input.lock').click();
        cy.contains('The password field cannot be empty.');
    })
})