describe('Test E2E Login', () => {
  // beforeEach(() => {
  //   cy.visit('https://develop--clinquant-sawine-745f98.netlify.app/');
  // });
  const email = 'iprede@iprede.com';
  const password = 'senhasenha';

  it('Visit page', () => {
    cy.visit('https://develop--clinquant-sawine-745f98.netlify.app/');
  });

  it('Should display the login forms correctly', () => {
    cy.visit('https://develop--clinquant-sawine-745f98.netlify.app/');

    cy.get('.box-image')
      .find('img')
      .should('have.attr', 'src', 'assets/images/banner-login.png');

    cy.get('.slogan').should('contain', 'doados, comunidades alimentadas');
    cy.get('.slogan').find('span').should('have.text', 'Alimentos');
    cy.get('[data-cy=email]').should('have.attr', 'placeholder', 'E-mail');
    cy.get('[data-cy=password]').should('have.attr', 'placeholder', 'Senha');
    cy.clock();
    cy.tick(3000);
    cy.get('[data-cy=button-login]').should('contain', 'Login');
  });

  it('Should insert values on inputs', () => {
    cy.visit('https://develop--clinquant-sawine-745f98.netlify.app/');
    cy.get('[data-cy=email]').as('emailInput');
    cy.get('[data-cy=password]').as('passwordInput');

    cy.get('@emailInput').type(email);
    cy.get('@emailInput').find('input').should('have.value', email);

    cy.get('@passwordInput').type(password);
    cy.get('@passwordInput').find('input').should('have.value', password);
    cy.get('[data-cy=button-login]').as('Login').click();
  });

  it('Should not authenticate', () => {
    cy.visit('https://develop--clinquant-sawine-745f98.netlify.app/');
    cy.get('[data-cy=email]').as('emailInput');
    cy.get('[data-cy=password]').as('passwordInput');

    cy.get('@emailInput').type('isnotEmail.com');

    cy.get('@passwordInput').type('isnotPassword');
    cy.url().should(
      'eq',
      'https://develop--clinquant-sawine-745f98.netlify.app/login'
    );
  });
});
