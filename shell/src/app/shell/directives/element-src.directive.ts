import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { assetUrl } from '../util/asset-url';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img[src],audio[src],embed[src],iframe[src],input[src],script[src],source[src],track[src],video[src]'
})
export class MfaElementSrcDirective implements OnChanges {
  private _src: string = '';
  @Input() src: string = '';
  constructor(private element: ElementRef, private renderer2: Renderer2) {

  }

  setSrc(src: string): void {
    // 非微前端環境不轉換
    if (!(window as any).__DW_MFA_ENV__) {
      this.renderer2.setAttribute(this.element.nativeElement, 'src', src);
      return;
    }

    // 絕對路徑，不轉換
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//') || src.startsWith('data:')) {
      this.renderer2.setAttribute(this.element.nativeElement, 'src', src);
      return;
    }

    if (src && src.startsWith('./')) {
      src = assetUrl(src.substring(1));
    } else {
      src = assetUrl(src);
    }

    this.renderer2.setAttribute(this.element.nativeElement, 'src', src);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this._src !== changes.src.currentValue) {
      this._src = changes.src.currentValue;
      this.setSrc(this._src);
    }
  }

}
