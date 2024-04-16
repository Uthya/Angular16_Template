import { Component, Injectable, OnInit } from '@angular/core';
import { SidebarModel } from '../app.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable()
export class GlobalComponent implements OnInit  {

  constructor(public http:HttpClient){
  }
  
  ngOnInit(): void {
  }


}
