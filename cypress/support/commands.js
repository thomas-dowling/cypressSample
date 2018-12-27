Cypress.Commands.add('visitURL', () => {
    //change environment easily over all tests
    const URL = 'https://www.zaptic.com/';

    cy.visit(URL);
})

Cypress.Commands.add('stringGen', (len) => {
    let string = '';

    const charset = 'abcdefghijklmnopqrstuvwxyz';
    let i;
    for (i = 0; i < len; i++) {
        string += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return string;

});