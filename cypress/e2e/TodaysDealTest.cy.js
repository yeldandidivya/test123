/// <reference types ="Cypress" />
import HomePage from "../pageObjects/Homepage"
import DealsPage from "../pageObjects/Dealspage"
import ProductPage from "../pageObjects/Productpage"
import CartBasketPage from '../pageObjects/CartBasketpage.js'
import CheckoutPage from '../pageObjects/Checkoutpage'

const homePage = new HomePage()
const dealsPage = new DealsPage()
const productPage = new ProductPage()
const cartBasketPage = new CartBasketPage()
const checkoutPage = new CheckoutPage()

describe('Todays Deals search Functionality', function () {
    before(function(){
        cy.fixture("TestData").then(function(data)
        {
            this.data=data
        }
        )
    })

    it('Validate Search a product, add and proceed till payment is required', function () {
        cy.visit("https://www.amazon.co.uk/");
        cy.get('[id="sp-cc-accept"]').click()
        
        let count = 0;
        homePage.getTopMenuContent().each(($el, index, $list) => {
            const itemName = $el.text()
            if ((itemName.includes(this.data.topMenu_option)) && (count == 0)) {
                cy.wrap($el).click()
                count++
            }
        })
        dealsPage.getHeader().should('include.text', "Today's Deals") 
        dealsPage.getItemCatagory().click() 
        dealsPage.getItem().click() 
        productPage.getAddToCartButton().click()
        cy.get('[class=" a-button-close a-declarative"]').click({ force: true })
        cartBasketPage.getBasketButton().click()
        cartBasketPage.getCartHeaderTitle().should('include.text', 'Shopping Basket')
        cartBasketPage.getCheckoutButton().click()
        checkoutPage.getCheckoutHeader().should('include.text', ' Sign in')        

    })
})