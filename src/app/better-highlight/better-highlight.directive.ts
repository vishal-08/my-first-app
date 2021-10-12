import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit{

  constructor(private elementref : ElementRef, private renderer : Renderer2) { }

  @Input() defaultColor : string = 'transparent'
  @Input() highlightColor : string = 'transparent'

  @HostBinding ('style.backgroundColor') backgroundColor : string 

  ngOnInit(){
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseover(dataEvent : Event){
    // this.renderer.setStyle(this.elementref.nativeElement, 'backgroundColor', 'blue')
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(dataEvent : Event){
    //this.renderer.setStyle(this.elementref.nativeElement, 'backgroundColor', 'transparent')
    this.backgroundColor = this.defaultColor
  }
}
