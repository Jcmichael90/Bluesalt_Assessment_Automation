const dynamicTablePage = require('../pages/DynamicTablePage');

describe('Dynamic Table', () => {
  beforeEach(() => {
    dynamicTablePage.visit();
  });

  it('should display the task manager table with correct headers', () => {
    dynamicTablePage.table.should('be.visible');
    dynamicTablePage.tableHeaders.should('have.length.greaterThan', 0);
    cy.get('[role="columnheader"]').contains('CPU').should('be.visible');
    cy.get('[role="columnheader"]').contains('Name').should('be.visible');
  });

  it('should display Chrome process in the table', () => {
    dynamicTablePage.tableRows.then(($rows) => {
      const rowTexts = [...$rows].map((row) => row.textContent);
      const chromeRow = rowTexts.find((text) => text.includes('Chrome'));
      expect(chromeRow).to.not.be.undefined;
    });
  });

  it('should match Chrome CPU value in table with the yellow label', () => {
    // Get CPU column index dynamically
    cy.get('[role="columnheader"]').then(($headers) => {
      let cpuIndex = -1;
      $headers.each((i, el) => {
        if (el.textContent.trim() === 'CPU') {
          cpuIndex = i;
        }
      });

      // Get Chrome row CPU value from table
      cy.get('[role="rowgroup"]').last().find('[role="row"]').then(($rows) => {
        let chromeCpuFromTable = null;
        $rows.each((i, row) => {
          const cells = Cypress.$(row).find('[role="cell"]');
          if (cells.first().text().trim() === 'Chrome') {
            chromeCpuFromTable = Cypress.$(cells[cpuIndex]).text().trim();
          }
        });

        // Get Chrome CPU value from the label
        cy.get('p').contains('Chrome CPU:').invoke('text').then((labelText) => {
          const chromeCpuFromLabel = labelText.replace('Chrome CPU:', '').trim();
          expect(chromeCpuFromTable).to.equal(chromeCpuFromLabel);
        });
      });
    });
  });

  it('should display the Chrome CPU label below the table', () => {
    dynamicTablePage.chromeCpuLabel.should('be.visible').and('contain.text', 'Chrome CPU:');
  });
});