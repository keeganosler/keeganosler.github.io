import { Component } from '@angular/core';
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
}
