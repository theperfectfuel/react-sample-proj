var React = require('react');
var connect = require('react-redux').connect;

var actions = require('./actions');

var GuessForm = React.createClass({
    submitGuess: function(event) {
        event.preventDefault();
        this.props.dispatch(actions.makeGuess(this.refs.input.value));
    },
    render: function() {
        return (
            <form onSubmit={this.submitGuess}>
                <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required ref="input" />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
});

var Container = connect()(GuessForm);

module.exports = Container;
