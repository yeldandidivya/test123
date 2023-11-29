import HomePage from '../pageObjects/Homepage'
import ProductListpage from '../pageObjects/ProductListpage.js'
import ProductPage from '../pageObjects/Productpage.js'
import CartBasketPage from '../pageObjects/CartBasketpage.js'

const homePage = new HomePage()
const productListpage = new ProductListpage()
const productPage = new ProductPage()
const cartBasketPage = new CartBasketPage()

describe('Validate Textbox search functionality', function () {
    before(function () {
        cy.fixture("TestData").then(function (data) {
            this.data = data
})
})

it('Search - microwave oven, add and delete from cart', function () {
    cy.visit("https://www.amazon.co.uk/");
    cy.get('[id="sp-cc-accept"]').click()
    //cy.getCookies()
    homePage.getTextBox().type(this.data.textboxProduct)
    homePage.getTextBoxSearchButton().click()

    //select the product from result table
    let clickCount = 0;
    productListpage.getProductNames().each(($el, index, $list) => {
        const itemName = $el.text()
        if ((itemName.includes(this.data.textboxProduct)) && (clickCount == 0)) {
            cy.wrap($el).click()
            clickCount++
        }
    })
    productPage.getProductTitle().should('include.text', 'Samsung MS23F301TFK Microwave Oven, 800W, 23 Litre, Black')
    productPage.getAddToCartButton().click()
    productPage.getNoThankstButton().click({ force: true })
    
    cartBasketPage.getBasketButton().click()
    cartBasketPage.getDeleteButton().click({ multiple: true })
    cartBasketPage.getDeleteConfirmText().should('include.text', ' was removed from Shopping Basket. ')

})
})






































