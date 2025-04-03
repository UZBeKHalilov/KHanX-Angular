import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navigator',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})

export class NavigatorComponent {
  selectedNav: string = 'hr';
  
  navItems = [
    { id: 'hr', label: 'HR', icon: 'fa fa-users', badge: '12' },
    { id: 'wms', label: 'WMS', icon: 'fa fa-warehouse', badge: '' }
  ];
  
  hrItems = [
    { 
      id: 'employee', 
      title: 'Employee', 
      route: '/hr/employee', 
      icon: 'fa fa-user'
    },
    { 
      id: 'departments', 
      title: 'Departments', 
      route: '/hr/departments', 
      icon: 'fa fa-building'
    },
    { 
      id: 'attendance', 
      name: 'Attendance', 
      description: 'Track attendance', 
      route: '/hr/attendance', 
      icon: 'fa fa-calendar-check',
      badge: '2'
    },
    { 
      id: 'payroll', 
      name: 'Payroll', 
      description: 'Manage payroll', 
      route: '/hr/payroll', 
      icon: 'fa fa-money-bill'
    }
  ];
  
  wmsItems = [
    { 
      id: 'inventory', 
      title: 'Inventory', 
      route: '/wms/inventory', 
      icon: 'fa fa-boxes'
    },
    { 
      id: 'orders', 
      title: 'Orders', 
      route: '/wms/orders', 
      icon: 'fa fa-shopping-cart'
    },
    { 
      id: 'shipping', 
      title: 'Shipping', 
      route: '/wms/shipping', 
      icon: 'fa fa-truck'
    }
  ];
  
  selectNav(navId: string): void {
    this.selectedNav = navId;
  }
}