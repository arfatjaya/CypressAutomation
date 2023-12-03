///<reference types="Cypress"/>


describe('My first FrameWork  ', function ()
 {
    before(() => {
        // runs once before all tests in the block

        cy.fixture('example').then(function(data)
        {

            this.data=data
        })
      })
    it('My first Test case', function () {

      
        
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.wait(600)
        cy.get('select').select(this.data.gender)

        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled') 

        cy.get(':nth-child(2) > .nav-link').click()
       
        
        this.data.ProductName.forEach((element) => 
        {
            cy.SelectProduct(element)

        })



       
         
    });
});
