import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, computed, signal } from '@angular/core';
import { SidebarModel } from 'src/app/app.model';
import { GlobalComponent } from 'src/app/global/global.component';
import { collapseMenu } from 'src/app/pages/pages.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuList:any=[];
  issideBarCollapse:any=false;
  collapseMenu:collapseMenu=new collapseMenu();
  @Output() emitopages = new EventEmitter<collapseMenu>();

  constructor(public global:GlobalComponent,public http:HttpClient){

  }

  ngOnInit(): void {
    this.getMenuList();
    
    
  }

  getMenuList(){
      this.http.get<SidebarModel[]>("assets/menu.json").subscribe((res) => {
        this.menuList = res;
        console.log(this.menuList);
      }); 
  }
  menuToggle(index:number){
    this.menuList[index].menu = !this.menuList[index].menu;
    for (let i = 0; i < this.menuList.length; i++) {
      if (i !==index) {
        this.menuList[i].menu = false;
      }
    }
    this.setupSubMenuItems();
  }

  setupSubMenuItems(): void {
    const submenuItems = document.querySelectorAll(".sub-menu");
    const submenu_Arrow = document.querySelectorAll(".submenu-arrow");
    submenuItems.forEach((item, index) => {
        submenuItems.forEach((item2, index2) => {
          if (index !== index2) {
            item2.classList.remove("show-menu");
          }
        });
        submenu_Arrow.forEach((menu,index1)=>{
          if(index1!== index){
            menu.classList.remove("rotate-arrow");
          }
        })
        
    });
  }

  EmitFromHeaderComponent(event: collapseMenu ) {
    this.collapseMenu.isCollapsed = event.isCollapsed
    this.collapseMenu.contentWidth = event.contentWidth

    this.emitopages.emit({
      isCollapsed:this.collapseMenu.isCollapsed,
      contentWidth:this.collapseMenu.contentWidth
    })
  }


 
}
