class DynamicTablePage {
  // Selectors
  get table() {
    return cy.get('[role="table"]');
  }

  get tableHeaders() {
    return cy.get('[role="columnheader"]');
  }

  get tableRows() {
    return cy.get('[role="rowgroup"]').last().find('[role="row"]');
  }

  get chromeCpuLabel() {
    return cy.get('p').contains('Chrome CPU:');
  }

  // Actions
  visit() {
    cy.visit('/dynamictable');
  }

  /**
   * Get the CPU value for a specific process from the table
   * @param {string} processName - e.g. 'Chrome'
   * @returns Cypress chainable with the CPU cell text
   */
  getCpuValueForProcess(processName) {
    // First find the column index of CPU header
    return this.tableHeaders.then(($headers) => {
      let cpuIndex = -1;
      $headers.each((i, el) => {
        if (el.textContent.trim() === 'CPU') {
          cpuIndex = i;
        }
      });

      // Find the row for the process and get the CPU cell
      return this.tableRows.then(($rows) => {
        let cpuValue = null;
        $rows.each((i, row) => {
          const cells = Cypress.$(row).find('[role="cell"]');
          if (cells.first().text().trim() === processName) {
            cpuValue = Cypress.$(cells[cpuIndex]).text().trim();
          }
        });
        return cy.wrap(cpuValue);
      });
    });
  }

  /**
   * Get the Chrome CPU value shown in the yellow label
   */
  getChromeCpuLabelValue() {
    return this.chromeCpuLabel.invoke('text').then((text) => {
      // Extract value from "Chrome CPU: X.X%"
      return text.replace('Chrome CPU:', '').trim();
    });
  }
}

module.exports = new DynamicTablePage();