import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  constructor() {}

  calculatePasswordStrength(password: string): number {
    if (!password) {
      return -1;
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[#$-/:-?{-~!"^_`\[\]]/.test(password);

    if (hasLetters && hasNumbers && hasSymbols) {
      return 2;
    }

    if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) {
      return 1;
    }

    return 0;
  }
}
