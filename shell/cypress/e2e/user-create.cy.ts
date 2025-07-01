describe('User creation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200'); // или нужный URL
  });

  it('should create a new user via modal', () => {
    // Открываем модалку
    cy.get('[data-cy=add-user-button]').click();

    // Проверяем, что модалка появилась (например, по заголовку)
    cy.get('mat-dialog-container').should('exist');
    cy.get('mat-dialog-container').contains('Create User');

    // Заполняем форму
    cy.get('[data-cy=form-name]').type('John Doe');
    cy.get('[data-cy=form-email]').type('john@example.com');

    // Отправляем форму
    cy.get('[data-cy=form-submit]').click();

    // Проверяем, что модалка закрылась
    cy.get('mat-dialog-container').should('not.exist');

  });
});
