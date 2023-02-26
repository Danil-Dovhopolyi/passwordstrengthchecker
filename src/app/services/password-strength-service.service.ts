import { Injectable } from '@angular/core';
import { Strength } from '../types/strength';

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
      return Strength.HARD;
    }

    if (
      (hasLetters && hasNumbers) ||
      (hasLetters && hasSymbols) ||
      (hasNumbers && hasSymbols)
    ) {
      return Strength.MEDIUM;
    }
    return Strength.EASY;
  }
}
