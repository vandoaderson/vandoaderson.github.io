import { Component } from '@angular/core';

interface ShortLink {
  label: string;
  shortPath: string;
  destination: string;
}

@Component({
  selector: 'app-mini-url',
  imports: [],
  templateUrl: './mini-url.html',
  styleUrl: './mini-url.scss'
})
export class MiniUrl {
  protected readonly links: ShortLink[] = [
    {
      label: 'GT Stats',
      shortPath: 'vandoaderson.github.io/miniURL/gtstats',
      destination: 'https://gtstats.live/'
    },
    {
      label: 'Instagram',
      shortPath: 'vandoaderson.github.io/miniURL/instagram',
      destination: 'https://instagram.com/vandoaderson'
    }
  ];
}
