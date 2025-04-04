import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ThemeSwitcherComponent } from './shared/components/theme-switcher/theme-switcher.component';
import { LinkComponent } from './shared/components/link/link.component';
import { VersionComponent } from './shared/components/version/version.component';
import { IconComponent } from './shared/components/icon/icon.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, ThemeSwitcherComponent, LinkComponent, VersionComponent, IconComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
