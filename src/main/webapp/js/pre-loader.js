var App = App || {};

(function () {
    'use strict';

    App.PreLoader = {
        loadIndex: function () {
            App.PreLoader.loadMenu();
        },

        loadMenu: function () {
            App.PreLoader.fetchMenuPartial().done(function () {
                App.API.processTemplate('nav', App.Menu);
            });
        },

        fetchMenuPartial: function () {
            return jQuery.get('./modules/menu/menu.html', function (data) {
                Handlebars.registerPartial('menu', data);
            }, 'html');
        }
    };
}());