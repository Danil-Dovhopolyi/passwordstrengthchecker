import { Component } from '@angular/core';
import { PasswordStrengthService } from './services/password-strength-service.service';
import { Strength } from './types/strength';
import { Color } from './types/colors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  password: string = '';

  constructor(private passwordService: PasswordStrengthService) {}
  onPasswordChange(event: Event) {
    const element = event.target as HTMLInputElement;
    if (element) {
      this.password = element.value;
    }
  }

  getPasswordSectionColor(sectionIndex: number): string {
    if (this.password.length === 0) {
      return Color.GRAY;
    }
    const strength = this.passwordService.calculatePasswordStrength(
      this.password
    );
    if (this.password.length < 8) {
      return Color.RED;
    } else if (strength === Strength.EASY) {
      return sectionIndex === Strength.EASY ? Color.YELLOW : Color.GRAY;
    } else if (strength === Strength.MEDIUM) {
      return sectionIndex === Strength.EASY || sectionIndex === Strength.MEDIUM
        ? Color.YELLOW
        : Color.GRAY;
    } else {
      return Color.GREEN;
    }
  }

  title = 'test-usense';
}
export class PasswordStrengthComponent {}
