import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @Input({required: true}) iconName: string;

  get currentTheme():string {
    return this.document.documentElement.classList.contains('light-theme') ? 'light' : 'dark';
  }

}
