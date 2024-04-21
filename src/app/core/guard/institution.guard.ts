import { CanActivateFn } from '@angular/router';

export const institutionGuard: CanActivateFn = (route, state) => {
  const typeUser = localStorage.getItem('typeUser');
  if (typeUser === 'institution') {
    return true;
  }
  return false;
};
