import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  topPosToStartShowing = 100;
  @ViewChild('target') private myScrollContainer: ElementRef<HTMLInputElement> = {} as ElementRef;

  @HostListener('window:scroll')
ngOnInit(): void {
  
}

  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
  }
  goToBottom(){
    console.log('test',this.myScrollContainer.nativeElement.scrollHeight)
    window.scroll({
    top: this.myScrollContainer.nativeElement.scrollHeight,
      left:0,
      behavior:'smooth'
    })
  }
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
