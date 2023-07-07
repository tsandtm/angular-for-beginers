import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSettingsService {
  private renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  loadThemeSettings(): void {
    console.log('%c✔ Theme settings loaded', 'color: #148f32');
    /**
     * Load from localstorage
     **/
    const themeSettings = JSON.parse(localStorage.getItem('themeSettings') || '{}');
    const themeOptions = themeSettings.themeOptions || '';
    const themeURL = themeSettings.themeURL || '';

    if (themeOptions) {
      this.renderer.addClass(document.body, themeOptions);
    } else {
      console.log('%c✔ Heads up! Theme settings is empty or does not exist, loading default settings...', 'color: #ed1c24');
    }

    if (themeURL && !document.getElementById('mytheme')) {
      const cssfile = this.renderer.createElement('link');
      this.renderer.setAttribute(cssfile, 'id', 'mytheme');
      this.renderer.setAttribute(cssfile, 'rel', 'stylesheet');
      this.renderer.setAttribute(cssfile, 'href', themeURL);
      this.renderer.appendChild(document.head, cssfile);
    } else if (themeURL && document.getElementById('mytheme')) {
      this.renderer.setAttribute(document.getElementById('mytheme'), 'href', themeURL);
    }
  }

  saveSettings(): void {
    const classList = Array.from(document.body.classList);
    const themeOptions = classList
      .filter(item => /^(nav|header|footer|mod|display)-/i.test(item))
      .join(' ');

    const themeURL = document.getElementById('mytheme')?.getAttribute('href') || '';

    const themeSettings = {
      themeOptions,
      themeURL
    };

    localStorage.setItem('themeSettings', JSON.stringify(themeSettings));
  }

  resetSettings(): void {
    localStorage.removeItem('themeSettings');
  }

}
