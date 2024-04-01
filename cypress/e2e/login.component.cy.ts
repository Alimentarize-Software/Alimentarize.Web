describe('Test E2E Login', () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:4200/login');
  // });
  const email = 'iprede@iprede.com';
  const password = 'senhasenha';

  it('Visit page', () => {
    cy.visit('http://localhost:4200/login');
  });

  it('Should display the login forms correctly', () => {
    cy.visit('http://localhost:4200/login');

    cy.get('.box-image')
      .find('img')
      .should('have.attr', 'src', 'assets/images/banner-login.png');

    cy.get('.slogan').should('contain', 'doados, vidas alimentadas');
    cy.get('.slogan').find('span').should('have.text', 'Alimentos');
    cy.get('[data-cy=email]').should('have.attr', 'placeholder', 'E-mail');
    cy.get('[data-cy=password]').should('have.attr', 'placeholder', 'Senha');
    cy.clock();
    cy.tick(3000);
    cy.get('[data-cy=button-login]').should('contain', 'Login');
  });

  it('Should insert values on inputs', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('[data-cy=email]').as('emailInput');
    cy.get('[data-cy=password]').as('passwordInput');

    cy.get('@emailInput').type(email);
    cy.get('@emailInput').find('input').should('have.value', email);

    cy.get('@passwordInput').type(password);
    cy.get('@passwordInput').find('input').should('have.value', password);
    cy.get('[data-cy=button-login]').as('Login').click();
  });

  it('Should not authenticate', () => {
    cy.visit('http://localhost:4200/login');
    cy.get('[data-cy=email]').as('emailInput');
    cy.get('[data-cy=password]').as('passwordInput');

    cy.get('@emailInput').type('isnotEmail.com');

    cy.get('@passwordInput').type('isnotPassword');
    cy.url().should('eq', 'http://localhost:4200/login');
  });
});
