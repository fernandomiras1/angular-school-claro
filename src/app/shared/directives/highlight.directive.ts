import { Directive, Input, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input('appHighlight') isHighlighted = false;
  @Input() color = '#fdf498';
  constructor(private element: ElementRef) { }


  ngOnChanges(): void {
    if (this.isHighlighted) {
      this.element.nativeElement.childNodes[0].style.backgroundColor = this.color;
    } else {
      this.element.nativeElement.childNodes[0].style.backgroundColor = '';
    }
  }

}
