import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false; // Menü başlangıçta kapalıdır.

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Menüyü aç veya kapat
  }
}
