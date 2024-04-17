import { Component, ElementRef, HostListener, Input, ViewChild, ViewEncapsulation } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-back-top',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./back-top.component.css'],
  templateUrl:'./back-top.component.html'
})
export class BackTopComponent {
  @Input() position:any = 400;
  @Input() showSpeed:number = 200;
  @Input() moveSpeed:number = 100;

  @ViewChild('backTop', { static: true }) private selector!:ElementRef ;

  ngAfterViewInit () {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick():boolean {
    jQuery('html, body').animate({scrollTop:0}, {duration:this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll():void {
    let el = this.selector.nativeElement;
    window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  } 
}
