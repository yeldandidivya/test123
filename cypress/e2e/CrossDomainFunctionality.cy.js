/// <reference types ="Cypress" />
import Commitquality from '../pageObjects/Commitquality'

const commitquality = new Commitquality()


describe('Test Suit for Cross Domain Functionality', function () {

    it('Validate Testing for Cross Domain', function () {
        cy.visit("https://commitquality.com/");

        commitquality.getTFilterTextBox().type("testingproduct")
        commitquality.getTFilterButton().click()
        commitquality.getTTextMsg().should('include.text', 'No products found')
        commitquality.getTResetButton().click()
        commitquality.getTTextMsg().should('not.exist')

        cy.visit("https://www.demoblaze.com/");  
        cy.origin("https://www.demoblaze.com/", () => {
            const Demoblazepage = Cypress.require('../pageObjects/DemoblazePage')
            const demoblazepage = new Demoblazepage()

            demoblazepage.getPageURL().should('eq', 'https://www.demoblaze.com/')
            demoblazepage.getTabContact().click()
            demoblazepage.getContactModalTitle().should('have.text', 'New message')
            demoblazepage.getContactModalTextbox().type('Test')
            demoblazepage.getContactModalSendBtn().click()
            cy.on('window:alert', (str) =>  
            {
                expect(str).to.equal('Thanks for the message!!')
            })
        })

        cy.visit("https://commitquality.com/"); 
        commitquality.getTableRows().should('have.length', 10)
        commitquality.getShowMoreButton().click()
        commitquality.getTableRows().should('have.length', 11)

    })
})