import { EventEmitter } from '@angular/core';
import { ButtonComponent } from './button.component';
import { createOutputSpy } from 'cypress/angular';

function callModal() {
  window.alert('Olá');
}
const buttonSelector = '#buttonSelector'; // Defina o seletor CSS para o botão
const tipoValue = 'primary';

const clickEmitter = new EventEmitter<any>(); // Crea un nuevo EventEmitter
clickEmitter.subscribe(() => callModal()); // Suscribe la función callModal al EventEmitter

it('Testing of click', () => {
  cy.mount(
    '<app-button (click)="onClick.emit($event)" tipo="primary">Click me</app-button>',
    {
      componentProperties: {
        onClick: createOutputSpy('onClickSpy'),
        tipo: tipoValue,
      },
    }
  );
  cy.log('Componente montado, tentando localizar o botão...');

  cy.get('app-button').should('exist').click();
  cy.get('app-button').should('have.text', 'Click me');
  cy.get('app-button').find('.botao-primario');
  // cy.get('app-button').invoke('text').should('contain', tipoValue);
  // cy.get('@onClickSpy').should('have.text', 'Click me');
});
