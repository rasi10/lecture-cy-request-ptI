/// <reference types="cypress" />

describe('Test suite 1 - Playing with cy.request()', () =>{
    it('Request to /jokes/random endpoint', () => {
        cy.request({url: 'http://api.icndb.com/jokes/random'}).then((response => {
            //cy.log(response.body)
            cy.log(JSON.stringify(response.body))
            // cy.log(JSON.stringify(response.body.type))
            // cy.log(JSON.stringify(response.body.value.id))
            // cy.log(JSON.stringify(response.body.value.joke))
            // cy.log(JSON.stringify(response.body.value.categories))

            cy.log(response.status)
            expect(response.status).to.eq(200)
        }))
    })

    it('Request to /jokes/random endpoint', () => {
        cy.request({url: 'http://api.icndb.com/jokes/random'}).its('status').should('eq', 200)
    })

    it('Request to /jokes/6 endpoint', () => {
        cy.request({url: 'http://api.icndb.com/jokes/6'}).then((response => {
            const id = JSON.stringify(response.body.value.id)
            expect(id).to.equal('6')
        }))
    })

    it.only('Request to /jokes/6 endpoint', () => {
        cy.request({url: 'http://api.icndb.com/jokes/6'}).then((response => {
            const joke = JSON.stringify(response.body.value.joke)
            expect(joke).to.have.string('Since 1940')
        }))
    })
})
