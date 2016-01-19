require.config({
    waitSeconds: 60,
    paths: {
        "jquery": "js/vendor/jquery",
        "underscore": "js/vendor/underscore",
        "backbone": "js/vendor/backbone",
        "babysitter" : "js/vendor/backbone.babysitter",
        "wreqr" : "js/vendor/backbone.wreqr",
        "marionette": "js/vendor/backbone.marionette.min",
        "braintree": "https://js.braintreegateway.com/v2/braintree",
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "marionette": {
            deps: ["backbone", "babysitter", "wreqr"],
            exports: "Marionette"
        },
        deps: [ 'jquery', 'underscore']
    }
});

define([
    'jquery',
    'backbone',
    'underscore',
    'braintree',
], function ($, Backbone, _, braintree) {
    console.log('braintree:', braintree);

    if (braintree === undefined) {
      $('h1').text('Error! braintree is undefined!');
    } else {
      $('h1').text('braintree has loaded! All good');
    }
});
