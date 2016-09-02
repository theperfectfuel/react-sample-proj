var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    return {
        type: NEW_GAME
    };
};

var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess) {
    return {
        type: MAKE_GUESS,
        guess: guess
    };
};

var TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
var toggleInfoModal = function() {
    return {
        type: TOGGLE_INFO_MODAL,
    };
};


exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.TOGGLE_INFO_MODAL = TOGGLE_INFO_MODAL;
exports.toggleInfoModal = toggleInfoModal;
