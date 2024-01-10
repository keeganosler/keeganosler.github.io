import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  faMoon = faMoon;
  faSun = faSun;

  theme: string = 'dark-theme';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.onThemeChange(this.theme);    
  }

  onThemeChange(theme: string): void {
    this.theme = theme;
    if (this.theme === 'dark-theme') {
      if (this.document.documentElement.classList.contains('light-theme')) {
        this.document.documentElement.classList.remove('light-theme');
      }
      this.document.documentElement.classList.add('dark-theme');
    } else {
      if (this.document.documentElement.classList.contains('dark-theme')) {
        this.document.documentElement.classList.remove('dark-theme');
      }
      this.document.documentElement.classList.add('light-theme');
    }
  }

}
