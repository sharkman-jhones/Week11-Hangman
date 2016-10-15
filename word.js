Letter = require('./letter.js');

function Word(value){
	this.value = value;
	this.letters = value.split('').map(l => new Letter(;));
}

Word.prototype.render = function(){
	return this.letters.map(l => l.render())
}

Word.prototype.reveal = function() {
	this.letters.forEach(l => {l.visible = true;});
	return this;
}

Word.prototype.guess = function(guess) {
	return this.letters.map(l => {
		var match = (guess === l.value);
		l.visible = l.visible || match;
		return match
	})
	.some(v => v);
}

Word.prototype.complete = function() {
	return this.render() === this.value;
};

module.exports = Word;