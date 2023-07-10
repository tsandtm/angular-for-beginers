import { AfterViewInit, Component, ElementRef } from '@angular/core';

import { SmartAdminConfigService } from './../smart-admin-config.service';

declare function buildNavigation(params: any, b: any): any;

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private smartAdminConfigService: SmartAdminConfigService
  ) { }

  ngAfterViewInit(): void {
    // const script1 = document.createElement('script');
    // script1.src = 'assets/js/x/navigation.js';
    // this.elementRef.nativeElement.appendChild(script1);
    const id = this.elementRef.nativeElement.querySelector(this.smartAdminConfigService.myapp_config["navHooks"]);
    buildNavigation(id, this.smartAdminConfigService.myapp_config)
  }
}

//https://fmoralesdev.com/2019/10/23/using-external-js-files-in-angular/
//https://www.c-sharpcorner.com/article/using-external-js-file-in-angular-app/
//https://codeburst.io/lazy-loading-external-javascript-libraries-in-angular-3d86ada54ec7
