import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit
{
  texts = ['Text 1', 'Text 2', 'Text 3'];
  currentIndex: number = 0;
  @ViewChild('textElement') textElement!: ElementRef;

  showText = false;

  constructor (private renderer: Renderer2) { }

  ngOnInit()
  {
    setTimeout(() =>
    {
      this.updateIndex();
    }, 3000);
  }

  updateIndex()
  {
    this.currentIndex++;
    if (this.currentIndex >= this.texts.length)
    {
      this.currentIndex = 0;
    }
    this.showText = !this.showText;
    if (this.showText)
    {
      this.renderer.setStyle(this.textElement.nativeElement, 'opacity', '1');
      this.showText = !this.showText;
    } else
    {
      this.renderer.setStyle(this.textElement.nativeElement, 'opacity', '0');
    }
  }
}
