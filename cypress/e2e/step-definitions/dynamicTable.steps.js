const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');
const dynamicTablePage = require('../../pages/DynamicTablePage');

Given('I navigate to the Dynamic Table page', () => {
  dynamicTablePage.visit();
});

Then('the task manager table should be visible', () => {
  dynamicTablePage.table.should('be.visible');
});

Then('the table should have a {string} column header', (headerName) => {
  cy.get('[role="columnheader"]').contains(headerName).should('be.visible');
});

Then('the Chrome process should be listed in the table', () => {
  dynamicTablePage.tableRows.then(($rows) => {
    const rowTexts = [...$rows].map((row) => row.textContent);
    const chromeRow = rowTexts.find((text) => text.includes('Chrome'));
    expect(chromeRow).to.not.be.undefined;
  });
});

Then('the Chrome CPU value in the table should match the yellow label', () => {
  cy.get('[role="columnheader"]').then(($headers) => {
    let cpuIndex = -1;
    $headers.each((i, el) => {
      if (el.textContent.trim() === 'CPU') cpuIndex = i;
    });
    cy.get('[role="rowgroup"]').last().find('[role="row"]').then(($rows) => {
      let chromeCpuFromTable = null;
      $rows.each((i, row) => {
        const cells = Cypress.$(row).find('[role="cell"]');
        if (cells.first().text().trim() === 'Chrome') {
          chromeCpuFromTable = Cypress.$(cells[cpuIndex]).text().trim();
        }
      });
      cy.get('p').contains('Chrome CPU:').invoke('text').then((labelText) => {
        const chromeCpuFromLabel = labelText.replace('Chrome CPU:', '').trim();
        expect(chromeCpuFromTable).to.equal(chromeCpuFromLabel);
      });
    });
  });
});

Then('the Chrome CPU label should be visible below the table', () => {
  dynamicTablePage.chromeCpuLabel.should('be.visible').and('contain.text', 'Chrome CPU:');
});