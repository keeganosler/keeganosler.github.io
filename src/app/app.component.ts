import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faDownload,
  faEnvelope,
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
  faCode = faCode;

  theme: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.theme = this.document.documentElement.classList.contains('dark-theme')
      ? 'dark-theme'
      : '';
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
