import { Component } from '@angular/core';

import {
  faGithub,
  faLinkedin,
  faMedium,
  faCodepen
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'src/app/shared/components/link/link.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'keeganosler';

  links: Link[] = [
    {
      title: 'Github',
      icon: faGithub,
      url: 'https://www.github.com/keeganosler'
    }, 
    {
      title: 'Codepen',
      icon: faCodepen,
      url: 'https://codepen.io/keeganosler'
    }, 
    {
      title: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/keegan-osler-63a559177'
    }, 
    {
      title: 'Medium',
      icon: faMedium,
      url: 'https://medium.com/@oslerkeegan'
    },
  ]
}
