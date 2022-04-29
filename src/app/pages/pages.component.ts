import {Component, OnInit} from '@angular/core';

import {HOD_MENU_ITEMS, MENU_ITEMS} from './pages-menu';
import {User} from './users/users.entity';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  users: Partial<User>[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'The Admin',
      role: 'ROLE_ADMIN',
    },
    {
      id: 1,
      firstName: 'John',
      lastName: 'The HOD',
      role: 'ROLE_HOD',
    },
    {
      id: 1,
      firstName: 'John',
      lastName: 'The Mechanic',
      role: 'ROLE_MECHANIC',
    },
  ];

  menu;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data: any) => {
      if (data.role) {
        const userFound = this.users.filter(user => user.role === data.role)[0];
        if (userFound) {
          localStorage.setItem('user', JSON.stringify(userFound));
          console.log('data.role', data.role);
          if (data.role === 'ROLE_HOD' || data.role === 'ROLE_MECHANIC') {
            this.menu = HOD_MENU_ITEMS;
          } else {
            this.menu = MENU_ITEMS;
          }
        }
      }
    });
  }
}
