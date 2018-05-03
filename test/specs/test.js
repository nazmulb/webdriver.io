suite('my awesome website', function() {
    test('should do some chai assertions', function() {
        browser.url('https://nazmulb.wordpress.com/');
        browser.getTitle().should.be.equal('Nazmul Basher\'s Website | Personal website of Md. Nazmul Basher');
    });
});