class ProductPage
{

   getProductTitle()
   {
    return cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]')
   }
   getAddToCartButton()
   {
    return cy.get('[id="add-to-cart-button"]')
    //('input#add-to-cart-button')

   }
   getNoThankstButton()
   {
    return cy.contains(' No thanks ')
   }
    
}
export default ProductPage;
