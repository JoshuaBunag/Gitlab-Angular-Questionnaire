import { Component, OnInit } from '@angular/core';
import { faHome, faSignInAlt, faUserPlus, faSlidersH, faUser, faUserCircle, faBuilding, faExchangeAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { SharedDataService } from '@services/shared-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;
  faHome = faHome;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;
  faUserCircle = faUserCircle;
  faUser = faUser;
  faExchangeAlt = faExchangeAlt;
  navItems = [
    { name: 'Decision Tree Demo', destination: 'tree-demo', protected: false },
    { name: 'Data Privacy', destination: 'data-privacy', protected: false },
    { name: 'Imprint', destination: 'imprint', protected: false },
    // { name: 'Static Data', destination: 'workbench', menuType: 'MASTER_DATA', icon: faDatabase, protected: true },
    // { name: 'Transaction Data', destination: 'workbench', menuType: 'TRX_DATA', icon: faExchangeAlt, protected: true },
    // { name: 'Control Panel', destination: 'control-panel', icon: faSlidersH, protected: true },
  ];
  navItemsRight = [
    // { name: 'Profile', destination: 'user-profile', icon: faUserCircle, protected: true },
    // { name: 'Login', destination: 'login', icon: faSignInAlt, protected: false },
    // { name: 'Sign-up', destination: 'registration', icon: faUserPlus, protected: false },
    // { name: 'Logout', destination: 'logout', icon: faSignInAlt, protected: true },
  ];
  filterKey: string = "";

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
  }
  setMenu(menuType: string): void {
    this.sharedDataService.updateMessage(menuType);
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  validateProtection(navItem: any): boolean {
    if (navItem.protected === true) {
      return false //this.authService.isUserLoggedIn();
    } else {
      return true //!this.authService.isUserLoggedIn();
    }
  }

}
