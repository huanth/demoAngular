export function checkLogin() : boolean {
  // Logic to check if the user is logged in
  const isLoggedIn = localStorage.getItem('key_login');
  return isLoggedIn ? true : false;
}

export function checkAdmin() : boolean {
  // Logic to check if the user is an admin
  const isAdmin = localStorage.getItem('is_admin');
  return isAdmin ? true : false;
}

export function getName() : string {
  // Logic to check if the user is an admin
  const name = localStorage.getItem('name');
  return name ? name : 'Guest';
}