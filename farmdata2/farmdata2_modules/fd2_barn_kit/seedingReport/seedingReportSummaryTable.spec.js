describe('Testing for the Tray Seeding Summary Table', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')

        // Wait here for the maps to load in the page.
        cy.waitForPage()
    })

    it('displays a message if “All” or “Tray Seedings” is selected but there are no tray seedings in the date range used to generate the report.', () => {
        cy.get('[data-cy=start-date-select]').type('2024-06-21')
        cy.get('[data-cy=end-date-select]').type('2024-11-28')
        cy.get('[data-cy=generate-rpt-btn]').click()

        // cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
        //.select('Tray Seedings') Maybe we need to find a date where there exist some seedings but not tray seedings?
        cy.get('[data-cy=no-logs-message]').should('be.visible').should('contain.text', 'No Logs Found in These Dates');
    })

    it('Tray Seeding Summary Table not visible when "Direct Seedings" is chosen', () => {
        cy.get('[data-cy=start-date-select]').type('2020-01-01')
        cy.get('[data-cy=end-date-select]').type('2020-11-23')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy = seeding-type-dropdown] > [data-cy=dropdown-input]').select("Direct Seedings")
        cy.get('[data-cy=tray-summary]').should('not.exist')
    })

    it('Check if the Tray Seeding Summary Table exists and is visible when “All” is selected in the seeding type filter', () => {
        cy.get('[data-cy=start-date-select]').type('2015-01-01')
        cy.get('[data-cy=end-date-select]').type('2019-11-23')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy = seeding-type-dropdown] > [data-cy=dropdown-input]').select("All")
        cy.get('[data-cy=tray-summary]').should('exist')
        cy.get('[data-cy=tray-summary]').should('be.visible')
    })

    it('Check if the Tray Seeding Summary Table exists and is visible when “Tray Seedings” is selected in the seeding type filter', () => {
        cy.get('[data-cy=start-date-select]').type('2015-01-01')
        cy.get('[data-cy=end-date-select]').type('2019-11-23')
        cy.get('[data-cy=generate-rpt-btn]').click()
        cy.get('[data-cy = seeding-type-dropdown] > [data-cy=dropdown-input]').select("Tray Seedings")
        cy.get('[data-cy=tray-summary]').should('exist')
        cy.get('[data-cy=tray-summary]').should('be.visible')
    })

})
