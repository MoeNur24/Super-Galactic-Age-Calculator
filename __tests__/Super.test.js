describe('GalacticAge', () => {
    let galacticAge;

    beforeEach(() => {
        galacticAge = new galacticAge(23);
    });

    test('constructor sets age properly', () => {
        const age = 35
        const galacticAge = new GalacticAge(age);
        expect(galacticAge.onEarth()).toBe(age);
    });
    
});