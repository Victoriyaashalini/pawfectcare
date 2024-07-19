import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {  ElementRef, HostListener, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
 
})
export class NavbarComponent {
  isDropdownOpen = false;

  constructor(private eRef: ElementRef, private renderer: Renderer2) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const targetElement = event.target as HTMLElement;
    if (this.isDropdownOpen && !this.eRef.nativeElement.contains(targetElement)) {
      this.isDropdownOpen = false;
    }
  }
}
