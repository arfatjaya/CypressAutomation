///<reference types="Cypress"/>

describe('My first Test State', function () {
    it('My first Test case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product').should('have.length', 5);
        cy.get('.products').find('.product').should('have.length', 4);
        //cy.get(':nth-child(2) > .product-action > button').click();
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const veg = $el.find('.product-name').text();
            if (veg.includes('Cash')) {
                cy.wrap($el).find('button').dblclick()
            }
        });
    });
});
