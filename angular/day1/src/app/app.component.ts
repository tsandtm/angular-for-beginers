import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ThemeSettingsService } from './layouts/theme-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  constructor(private themeSettingsService: ThemeSettingsService) { }

  ngOnInit(): void {
    // this.themeSettingsService.loadThemeSettings();
  }
  ngAfterViewInit() {
    console.log('vao guest------1')
    this.themeSettingsService.loadThemeSettings();
  }
}
