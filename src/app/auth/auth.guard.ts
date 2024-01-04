import { CanActivateFn } from '@angular/router';
import { checkLogin, checkAdmin } from './authUtils';

export const authGuard: CanActivateFn = (route, state) => {
  
  if (checkLogin() && checkAdmin()) {
    return true;
  }

  return false;
};
