import { CanActivateFn } from '@angular/router';

export const institutionGuard: CanActivateFn = (route, state) => {
  const typeUser = localStorage.getItem('typeUser');
  if (typeUser === 'receiver') {
    return true;
  }
  return false;
};
