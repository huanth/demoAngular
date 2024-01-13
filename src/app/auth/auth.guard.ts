import { CanActivateFn } from '@angular/router';
import { checkLogin, checkAdmin } from './authUtils';
import { Router } from '@angular/router';

export const authGuardAdmin: CanActivateFn = (route, state) => {
  
  if (checkLogin() && checkAdmin()) {
    return true;
  }

  location.href = '/login';

  return false;
};

export const authGuardLogin: CanActivateFn = (route, state) => {
  
  if (checkLogin()) {
    return true;
  }

  location.href = '/login';

  return false;
};