class HomePage
{

   getTextBox()
   {
    return cy.get('input#twotabsearchtextbox')
   }
   getTextBoxSearchButton()
   {
    return cy.get('input#nav-search-submit-button')
   }
   getSandwichIcon()
   {
    return cy.get('a#nav-hamburger-menu')
   }
   getMainMenuContent()
   {
    return cy.get('div#hmenu-content ul li div')
   }
   getChildMenuContent()
   {
    return cy.get('ul.hmenu.hmenu-visible.hmenu-translateX li a.hmenu-item')
   }
   getTopMenuContent()
   {
    return cy.get('div#nav-xshop a')
   }
  
}
export default HomePage;