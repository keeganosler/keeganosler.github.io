import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

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
  icon: IconProp;
  url: string;
}
