import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})

export class RegisterPage 
{
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() 
  {
    if(this.password !== this.confirmPassword) 
    {
      alert('Passwords do not match!');
      
      return;
    }

    if(this.authService.register(this.email, this.password)) 
    {
      alert('Registration successful! Please log in.');
      
      this.router.navigate(['/login']); //Navigate to login page
    } 
    else 
    {
      alert('Registration failed! User already exists.');
    }
  }
}
