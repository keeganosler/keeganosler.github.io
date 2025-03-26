import { Component, OnInit } from '@angular/core';
import packageJson from '../../../../../package.json';

@Component({
    selector: 'app-version',
    templateUrl: './version.component.html',
    styleUrl: './version.component.scss',
    standalone: false
})
export class VersionComponent implements OnInit {
  version: string;

  ngOnInit(): void {
    this.version = packageJson.version;
  }
}
