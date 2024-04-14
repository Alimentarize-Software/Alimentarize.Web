import { EventEmitter } from '@angular/core';
import { ButtonComponent } from './button.component';
import { createOutputSpy } from 'cypress/angular';

let tipoValue = 'primary';

// it('Testing of click', () => {
//   const onChangeSpy = cy.spy().as('onChangeSpy');

//   cy.mount(ButtonComponent, {
//     componentProperties: {
//       click: {
//         emit: onChangeSpy,
//       } as any,
//       tipo: tipoValue,
//     },
//   });
//   cy.log('Componente montado, tentando localizar o botão...');

//   cy.get('[data-cy=button-component').click();
//   cy.get('[data-cy=button-component').should('have.class', 'botao-primario');
// });

it('Testing of click', () => {
  const onChangeSpy = cy.spy().as('onChangeSpy');

  cy.mount('<app-button [tipo]="tipo">Login</app-button>', {
    declarations: [ButtonComponent],
    componentProperties: {
      click: {
        emit: onChangeSpy,
      } as any,
      tipo: tipoValue,
    },
  });
  cy.get('[data-cy=button-component').click();
});

it('Testing of button themes', () => {
  cy.mount('<app-button [tipo]="tipo">Login</app-button>', {
    declarations: [ButtonComponent],
    componentProperties: {
      tipo: tipoValue,
    },
  });

  cy.get('[data-cy=button-component').should('have.class', 'botao-primario');

  cy.window()
    .its('appRef')
    .its('component')
    .then(($component) => {
      $component.tipo = 'secondary';
    });
  cy.get('[data-cy=button-component]').should('have.class', 'botao-secundario');
});
