///<reference types="Cypress"/>

describe('My first Test State', function () {
    it('My first Test case', function () {

        //radio button
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.wait(500)
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        cy.wait(900)
        cy.get('input[type="checkbox"]').check(['option1','option2'])
         

        // drop down static
        cy.wait(500)
        cy.get('select').select('Option2').should('have.value','option2')
        cy.wait(500)

         //static drop
        cy.get('#autocomplete').type('ds')
        cy.wait(7000)

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
             
            if ($el.text()=="India") {
                cy.wrap($el).click();
            }
        })


    
//alert
cy.get('#alertbtn').click()
cy.on('window:alert',(str)=>
{
expect(str).to.equal('Hello , share this practice page and share your knowledge')

})
cy.get('#confirmbtn').click()
         
    });
});
