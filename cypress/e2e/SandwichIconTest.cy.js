/// <reference types ="Cypress" />
import HomePage from '../pageObjects/Homepage'
import BrowsePage from '../pageObjects/BrowserPage'

const homePage = new HomePage()
const browsePage = new BrowsePage()

describe('Sandwich Icon search', function () {
    before(function(){
        cy.fixture("TestData").then(function(data)
        {
            this.data=data
        }
        )
    })

    it('Search - Fire TV - Accessories', function () {
        cy.visit("https://www.amazon.co.uk/")
        cy.get('[id="sp-cc-accept"]').click()
        cy.getCookies()
        homePage.getSandwichIcon().click()      
        let menuCount = 0;
        homePage.getMainMenuContent().each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.Main_option)) && (menuCount == 0)) {
                cy.wrap($el).click()
                menuCount++
            }
        })
        let childMenuCount = 0;
       homePage.getChildMenuContent().each(($el, index, $list) => {
           const itemName = $el.text()
           if ((itemName.includes(this.data.Child_option)) && (childMenuCount == 0)) {
               cy.wrap($el).click({force: true})
               childMenuCount++
           }
       })

    })
})


