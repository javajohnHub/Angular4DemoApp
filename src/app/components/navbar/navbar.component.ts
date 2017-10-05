import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
  public isCollapsed = false;
  public status: { isopen: boolean } = {isopen: false};
  public searchItems: Array<string> = ['spotify',
  'github', 'twitter', 'giphy', 'youtube', 'flickr'];
  public nasaItems: Array<string> = ['apod',
    'mars'];
constructor(private router: Router){

}
  public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
