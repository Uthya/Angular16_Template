import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SidebarModel } from 'src/app/app.model';
import { GlobalComponent } from 'src/app/global/global.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuList:any=[];
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
  }
}
