import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit
{
  images!: GalleryItem[];

  ngOnInit()
  {
    // Set items array
    this.images = [
      new ImageItem({ src: '/assets/dora/dora1.jpg' }),
      new ImageItem({ src: '/assets/dora/dora2.jpg' }),
      new ImageItem({ src: '/assets/dora/dora3.jpg' }),
      new ImageItem({ src: '/assets/dora/dora4.jpg' }),
      new ImageItem({ src: '/assets/dora/dora5.jpg' }),
      new ImageItem({ src: '/assets/dora/dora6.jpg' }),
      // ... more items
    ];
  }
}
