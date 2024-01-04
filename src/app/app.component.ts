import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDownload,
  faEnvelope,
  faGlasses,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'keeganosler';
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faDownload = faDownload;
  faDiscord = faDiscord;
  faStackOverflow = faStackOverflow;
  faMedium = faMedium;
  faGlasses = faGlasses;
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

    // if (event.checked) {
    //   this.selectDarkTheme();
    // } else {
    //   this.selectLightTheme();
    // }
  }

  // public selectDarkTheme(): void {
  //   this.document.documentElement.classList.add('dark-theme');
  //   this.theme = 'dark-theme';
  // }

  // public selectLightTheme(): void {
  //   this.document.documentElement.classList.remove('dark-theme');
  //   this.theme = '';
  // }

  onLinkClick(linkType: string) {
    switch (linkType) {
      case 'github': {
        window.location.href = 'https://www.github.com/keeganosler';
        break;
      }
      case 'linkedin': {
        window.location.href =
          'https://www.linkedin.com/in/keegan-osler-63a559177';
        break;
      }
      case 'instagram': {
        window.location.href = 'https://www.instagram.com/keegan_osler';
        break;
      }
      case 'discord': {
        window.location.href = 'https://discord.com/users/keeganosler#2625';
        break;
      }
      case 'stack': {
        window.location.href =
          'https://stackoverflow.com/users/11890585/keeganosler';
        break;
      }
      case 'medium': {
        window.location.href = 'https://medium.com/@oslerkeegan';
        break;
      }
    }
  }
}
