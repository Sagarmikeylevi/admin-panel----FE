import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NAV_LIST } from 'src/app/app.contants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  navList: {
    route: string;
    title: string;
  }[] = NAV_LIST;

  showSidebar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showSidebar = !['/login'].includes(event.urlAfterRedirects);
      }
    });
  }
}
