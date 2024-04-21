import { CanActivateFn } from '@angular/router';

export const donorGuard: CanActivateFn = (route, state) => {
  const typeUser = localStorage.getItem('typeUser');
  if (typeUser === 'donor') {
    return true;
  }
  return false;
};
