import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];
  faHome = faHome;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Decision Tree',
        routerLink: 'home',
      },
      {
        label: 'Data Privacy',
        routerLink: 'data-privacy',
      },
      {
        label: 'Imprint',
        routerLink: 'imprint',
      },
    ];
  }

}
