export class SidebarModel {
    title: string | undefined;
    routerlink: string | undefined;
    menu: boolean | undefined;
    icon:string| undefined;
    submenu:[]=[];
     
  }
export class submenu{ 
    childmenu: string | undefined;
    routerlink: string | undefined 
}
  