import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit{

  constructor(private elementref : ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    
  }

  @HostListener('mouseenter') mouseover(dataEvent : Event){
    this.renderer.setStyle(this.elementref.nativeElement, 'backgroundColor', 'blue')
  }

  @HostListener('mouseleave') mouseleave(dataEvent : Event){
    this.renderer.setStyle(this.elementref.nativeElement, 'backgroundColor', 'transparent')
  }
}
