import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Property to track the state of the mobile menu
  isMenuOpen: boolean = false;

  // Method to toggle the mobile menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
