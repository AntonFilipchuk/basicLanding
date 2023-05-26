import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit
{
  texts = ['Eye-catching visuals', 'High-quality graphics', 'Compelling imagery'];
  currentIndex: number = 0;
  showText = true;
  @ViewChild('textElement') textElement!: ElementRef;

  constructor (private renderer: Renderer2) { }

  ngOnInit()
  {
    setInterval(() =>
    {
      this.showText = false;
      setTimeout(() =>
      {
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        this.showText = true;
      }, 3000);
    }, 6000);
  }



}
