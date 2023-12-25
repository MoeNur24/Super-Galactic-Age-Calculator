import { GalacticAge } from '../src/Super-Galactic.js';

describe('GalacticAge', () => {
    let galacticAge;

    beforeEach(() => {
        galacticAge = new galacticAge(23);
    });

    test('constructor sets age properly', () => {
        const age = 35
        const galacticAge = new GalacticAge(age);
        expect(galacticAge.age()).toBe(age);
    });

    test('should calculate age on Earth', () => {
      expect(galacticAge.earthAge()).toBe(21);
    });

    test('should calculate age on Mercury', () => {
        expect(galacticAge.mercuryAge()).toBe(150);
    });

test('should calculate age on Venus', () => {
    expect(galacticAge.venusAge()).toBe(64);
  });

  test('should calculate age on Mars', () => {
    expect(galacticAge.marsAge()).toBe(28);
  });

  test('should calculate age on Jupiter', () => {
    expect(galacticAge.jupiterAge()).toBe(11);
  });
});
