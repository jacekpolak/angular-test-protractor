
    browser.get('http://localhost:3333/app/');

    // Select element by css selector
    var title = element(by.css('.page-title'));

    var name = element(by.binding('ac.surname'));

    describe('browser title', function() {
        it('should display the correct title', function() {
            expect(browser.getTitle()).toEqual('Angular Test Protractor');
        });
    });

    describe('content header', function() {
        it('should check content header', function() {
            expect(title.getText()).toEqual('Test Jacek');
        });
    });

    describe('binding element', function() {
        it('should be defined', function() {
            expect(name.getText()).toEqual('Polak');
        });
    });

