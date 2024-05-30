import { Component } from '@angular/core';
import { NAV_LIST } from 'src/app/app.contants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  navList: string[] = NAV_LIST;
}
