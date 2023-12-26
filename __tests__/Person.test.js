import { Person } from '../src/Person.js';

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person(23);
  });

  test('constructor sets age properly', () => {
    const age = 35;
    const personAgeInstance = new PersonAge(age);
    expect(personAgeInstance.age).toBe(age); 
  });

  test('should calculate age on Earth', () => {
    expect(person.earthAge()).toBe(23); 
  });

  test('should calculate age on Mercury', () => {
    expect(person.mercuryAge()).toBeCloseTo(95.83, 2); 
  });

  test('should calculate age on Venus', () => {
    expect(person.venusAge()).toBeCloseTo(37.83, 2);
  });

  test('should calculate age on Mars', () => {
    expect(person.marsAge()).toBeCloseTo(12.43, 2); 
  });

  test('should calculate age on Jupiter', () => {
    expect(person.jupiterAge()).toBeCloseTo(1.97, 2); 
  });
});