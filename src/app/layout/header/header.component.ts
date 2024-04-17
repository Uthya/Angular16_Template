import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { collapseMenu } from 'src/app/pages/pages.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  sideMenuCollapse =false;
  @Output() emitoSidebar = new EventEmitter<collapseMenu>();

  ngOnInit(): void {
  
  }

  toggleClick(){
    this.emitoSidebar.emit({
      isCollapsed: this.sideMenuCollapse,
      contentWidth:(this.sideMenuCollapse ? '3.5rem': '14rem')
    })
}
}
