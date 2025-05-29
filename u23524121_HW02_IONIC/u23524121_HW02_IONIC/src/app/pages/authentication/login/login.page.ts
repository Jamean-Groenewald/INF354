import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})

export class LoginPage 
{
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ionViewWillEnter() //For Resetting the form fields when the page is initialized, cuz when I logout, login didn't work.
  {
    this.email = '';
    this.password = '';
  }

  login() 
  {
    if(this.authService.login(this.email, this.password)) 
    {
      alert('Login successful!');
      
      this.router.navigate(['/home']); //Navigate to Home page
    } 
    else 
    {
      alert('Invalid email or password.');
    }
  }
}
