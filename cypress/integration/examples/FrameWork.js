///<reference types="Cypress"/>

import HomePage from '../PageObject/HomePage'
import ProductPage from '../PageObject/ProductPage'


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

      const homePage=new HomePage()
      const productPage= new ProductPage()
        
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getEditBox().type(this.data.name)
        cy.wait(600)
        homePage.getGender().select(this.data.gender)

        homePage.getDataBuind().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getenterpreniuor().should('be.disabled') 

        homePage.getShopTab().click()
       
         
        this.data.ProductName.forEach((element) => 
        {
            cy.SelectProduct(element)

        })
        productPage.ClickCheckOut().click()


       
         
    });
});
