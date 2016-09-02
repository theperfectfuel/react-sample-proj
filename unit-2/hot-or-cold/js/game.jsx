var React = require('react');

var Header = require('./header');
var GuessSection = require('./guess-section');
var GuessCount  = require('./guess-count');
var GuessList = require('./guess-list');

var Game = function(props) {
    return (
        <div>
            <Header />
            <GuessSection />
            <GuessCount />
            <GuessList />
        </div>
    );
};

module.exports = Game;
