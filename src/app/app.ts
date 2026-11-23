import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ButtonModule, CardModule, InputTextModule, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly translate = inject(TranslateService);

  readonly title = 'Angular Getting Started';
  readonly technologies = ['Angular', 'PrimeNG', 'Tailwind CSS'];
  readonly message = signal('Ready to build something great.');
  readonly currentLanguage = signal(this.translate.getCurrentLang() || 'en');
  draft = '';

  useLanguage(language: 'en' | 'it'): void {
    this.translate.use(language);
    this.currentLanguage.set(language);
  }

  saveMessage(): void {
    const value = this.draft.trim();
    if (value) {
      this.message.set(value);
      this.draft = '';
    }
  }
}
