import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
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
export class AppComponent {
  title = 'keeganosler';
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faDownload = faDownload;
  faDiscord = faDiscord;
  faGlasses = faGlasses;
  faMoon = faMoon;
  faSun = faSun;

  theme: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme = 'dark-theme';
    this.selectDarkTheme();
  }

  onButtonToggleChange(event: MatButtonToggleChange) {
    if (event.value) {
      this.selectDarkTheme();
    } else {
      this.selectLightTheme();
    }
  }

  public selectDarkTheme(): void {
    this.document.documentElement.classList.add('dark-theme');
    this.theme = 'dark-theme';
  }

  public selectLightTheme(): void {
    this.document.documentElement.classList.remove('dark-theme');
    this.theme = '';
  }
}
