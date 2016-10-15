function Letter(value) {
	this.value = value;
	this.visible = (value === ' ');
}

Letter.prototype.render = function() {
	return (this.visible) ? this.value : '_';
}

module.exports = Letter;