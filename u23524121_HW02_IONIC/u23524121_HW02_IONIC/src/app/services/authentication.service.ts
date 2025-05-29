import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService 
{
  private readonly storageKey = 'users'; //Key for storing user data in localStorage

  constructor() {}

  //Register a new user
  register(email: string, password: string): boolean 
  {
    const users = this.getUsers();
    const userExists = users.some((user: any) => user.email === email);

    if(userExists) 
    {
      return false; //Registration failed: user already exists
    }

    users.push({ email, password });
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    
    return true; //Registration successful
  }

  //Login a user
  login(email: string, password: string): boolean 
  {
    const users = this.getUsers();
    const user = users.find((user: any) => user.email === email && user.password === password);

    if(user) 
    {
      localStorage.setItem('loggedInUser', JSON.stringify(user)); //Save logged-in user
      
      return true; //Login successful
    }

    return false; //Login failed
  }

  //Logout the user
  logout(): void 
  {
    localStorage.removeItem('loggedInUser');
  }

  //Get the currently logged-in user
  getLoggedInUser(): any 
  {
    return JSON.parse(localStorage.getItem('loggedInUser') || 'null');
  }

  //Get all registered users
  private getUsers(): any[] 
  {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }
}