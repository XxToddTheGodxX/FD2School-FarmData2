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


describe('Default Start Date Test', () => {
    it('should have the default start date as the first day of the current year', () => {
      const currentYear = new Date().getFullYear();
      const firstDayOfYear = `${currentYear}-01-01`;
  
      cy.get('[data-cy=date-select]')
        .should('have.value', firstDayOfYear);
    });
  });
  
