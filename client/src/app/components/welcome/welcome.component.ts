import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent
{
  scrollToMiddle() {
    const middleElement = document.getElementById('gallery');
    middleElement!.scrollIntoView({ behavior: 'smooth' });
  }
}
