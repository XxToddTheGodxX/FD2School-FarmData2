beforeEach(() => {
    cy.login('manager1', 'farmdata2')
    cy.visit('/farm/fd2-barn-kit/transplantingReport')

    // Wait here for the maps to load in the page.   
    cy.waitForPage()
})

it('check Transplanting Report Header', () => {
    cy.get('[data-cy=Tr-report]')
    .should('have.text', 'Transplanting Report')
})

it('check generate report button', () => {
    cy.get('[data-cy=generate-rpt-btn]')
    .should('have.text', 'Generate Report')
    cy.get('[data-cy=generate-rpt-btn]')
    .should('be.enabled')
})

it('check default start date is first day of current day', () => {
    cy.get('[data-cy="date-range-selection"]')
    cy.get('[data-cy="date-range-selection"] input[name="set-start-date:"]')
    .should('have.value', '01/01/2024') 
    // this is not working yet
})