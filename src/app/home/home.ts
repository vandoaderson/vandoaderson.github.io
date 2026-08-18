import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html'
})
export class Home {
  protected readonly title = signal('portfolio');
}
