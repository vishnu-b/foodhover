process.env.NODE_ENV = 'test';

var http    = require('http');
var app     = require('../../app');
var Browser = require('zombie');
var should  = require('chai').should();

describe('home page', function() {
    before(function() {
        this.server = http.createServer(app).listen(4000);
        this.browser = new Browser({ site: 'http://localhost:4000' });
    });
    before(function(done){
        this.browser.visit('/', done);
    });

    it('should have title "Food Hover"', function() {
        this.browser.success.should.be.ok();
        this.browser.text('title').should.equal("Food Hover");
    });

    it('should have a link for logging in', function(){
        this.browser.assert.element('#sign-in', 'Sign in element is not found.');
        this.browser.assert.link('header a', 'Sign In', '/signin', 'Sign in link is not found.');
    });

    it('should have a link for registering', function(){
        this.browser.assert.element('#register', 'Register element is not found.');
        this.browser.assert.link('header a', 'Register', '/register', 'Registration link not found');
    });

    it('should have a link for viewing the cooks', function(){
        this.browser.assert.link('a', 'Cooks', '/cooks');
    });
    it('should have a link for viewing the food', function() {
        this.browser.assert.link('a', 'Food', '/food');
    });

    after(function(done) {
        this.server.close(done);
    });
});
