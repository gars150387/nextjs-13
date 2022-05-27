
describe('render home page', ()=>{

    it('visit home page', () =>{

        cy.visit('localhost:3000')

        cy.contains('GARS').should('to.be.visible')
    })

})