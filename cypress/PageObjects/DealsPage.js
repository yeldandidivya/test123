class DealsPage
{

   getHeader()
   {
    return cy.get('div#slot-2')
   }
   getItemCatagory()
   {
    return cy.get('div[data-testid="deal-card"]div').eq(6)
   }
   getItem()
   {
    return cy.get('div#octopus-dlp-asin-stream ul li').eq(0)
   }

  
}
export default DealsPage;