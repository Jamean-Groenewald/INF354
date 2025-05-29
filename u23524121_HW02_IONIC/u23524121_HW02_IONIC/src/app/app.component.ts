import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})

export class AppComponent 
{
  showMenu = false; //Default to hiding the menu

  constructor(private router: Router, private menuCtrl: MenuController) 
  {
    this.router.events.subscribe(event => //Fetch workout programs from the service
    {
      if(event instanceof NavigationEnd) 
      {
        this.showMenu = !['/login', '/register'].includes(event.urlAfterRedirects);
      }
    });
  }

  closeMenu() 
  {
    this.menuCtrl.close();

    if(this.router.url === '/login') 
    {
      this.showMenu = false; //Hide the menu on the login page
    }
  }
}
