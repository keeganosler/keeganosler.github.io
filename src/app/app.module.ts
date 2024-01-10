import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeeButtonModule } from 'keego-ds/dist/angular/src/components/Button';
import { HomeComponent } from './pages/home/home.component';
import { ThemeSwitcherComponent } from './shared/components/theme-switcher/theme-switcher.component';
import { LinkComponent } from './shared/components/link/link.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, ThemeSwitcherComponent, LinkComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    KeeButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
