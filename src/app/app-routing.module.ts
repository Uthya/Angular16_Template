import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path:"",
    component: PagesComponent,
    children:[
      {
        path:"home",
        loadChildren:()=>
            import("./pages/home/home.module").then(
              (md)=>md.HomeModule
            )
      },
      {
        path:"settings",
        loadChildren:()=>
            import("./pages/settings/settings.module").then(
              (md)=>md.SettingsModule
            )
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
