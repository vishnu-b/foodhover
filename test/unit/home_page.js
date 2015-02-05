process.env.NODE_ENV = 'test';

var express = require('express');
var app = express();
var nunjucks = require('nunjucks');

nunjucks.configure('app/views', {
    autoescape: true,
    express: app
});

