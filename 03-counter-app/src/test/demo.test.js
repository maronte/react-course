describe('test demo', () => {
    test('string should be equals', () => {
        // Initialize
        const message = 'Hello World';
    
        // Stimulus
        const message2 = "Hello World";
    
        // Expectation
        expect(message).toBe(message2);
    });
});