import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})

export class NavigatorComponent {
  selectedNav: string = 'hr';
  
  selectNav(navId: string): void {
    this.selectedNav = navId;
  }
}