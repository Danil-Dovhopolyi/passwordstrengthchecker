import { Component } from '@angular/core';
import { PasswordStrengthService } from './services/password-strength-service.service';

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
      return 'gray';
    }
    const strength = this.passwordService.calculatePasswordStrength(
      this.password
    );
    if (this.password.length < 8) {
      return 'red';
    } else if (strength === 0) {
      return sectionIndex === 0 ? 'red' : 'gray';
    } else if (strength === 1) {
      return sectionIndex === 0 || sectionIndex === 1 ? 'yellow' : 'gray';
    } else {
      return 'green';
    }
  }

  title = 'test-usense';
}
export class PasswordStrengthComponent {}
