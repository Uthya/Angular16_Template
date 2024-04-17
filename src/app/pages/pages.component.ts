import { Component, OnInit } from '@angular/core';
import { collapseMenu } from './pages.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit { 
collapseMenu:collapseMenu=new collapseMenu();
  ngOnInit(): void {
   
  }

  EmitFromSidebarCompoent(event: collapseMenu ) {
    this.collapseMenu.isCollapsed = event.isCollapsed
    this.collapseMenu.contentWidth = event.contentWidth
  }
}
