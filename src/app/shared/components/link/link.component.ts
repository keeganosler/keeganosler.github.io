import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input({required: true}) link: Link;

  onClick(): void {
    window.location.href = this.link.url;
  }
}

export interface Link {
  title: string;
  url: string;
}
