var gameMod = require('../../game.js');

describe("Inital:", function () {
    'use strict';
    var game;

    beforeEach(function () {
        game = new gameMod.Game("TestGame");
    });

    it("instance is created", function () {
        expect(game.name).toEqual("TestGame");
    });
});