import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './i18n/',
        suffix: '.json',
        enforceLoading: true,
        useHttpBackend: true,
      }),
    }),
    providePrimeNG({
      theme: {
        preset: AppPreset,
        options: {
          darkModeSelector: 'none',
        },
      },
    }),
  ],
};
