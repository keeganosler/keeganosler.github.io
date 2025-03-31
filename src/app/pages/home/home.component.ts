import { Component } from '@angular/core';
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
      title: 'github',
      url: 'https://www.github.com/keeganosler'
    }, 
    {
      title: 'codepen',
      url: 'https://codepen.io/keeganosler'
    }, 
    {
      title: 'linkedin',
      url: 'https://www.linkedin.com/in/keegan-osler-63a559177'
    }, 
    {
      title: 'medium',
      url: 'https://medium.com/@oslerkeegan'
    },
  ]
}
