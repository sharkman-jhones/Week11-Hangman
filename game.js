Word = require("./word.js");

function Game(){
	this.score = 0;
	this.start();
}
Game.prototype.start = function() {
	this.word = this.random();
	var characters = new Set(this.word.value.split(''));
	this.tries = Math.floor((26 - characters.length) / 4);
	this.guesses = new Set();
	this.done = false;
};

Game.prototype.bank = [
			"Datsun",
			"Honda",
			"Infiniti",
			"Isuzu",
			"Lexus",
			"Mazda",
			"Mitsubishi",
			"Nissan",
			"Subaru",
			"Suzuki",
			"Toyota",
			"Hyundai",
			"Kia",
			"Holden",
			"Gillet",
			"Alpine",
			"Bugatti",
			"Citroen",
			"Hommell",
			"Peugeot",
			"Renault",
			"Audi",
			"BMW",
			"Mercedes Benz",
			"Mini",
			"Opel",
			"Volkswagen",
			"Alfa Romeo",
			"Autobianchi",
			"Cizeta",
			"Ferrari",
			"Fiat",
			"Lamborghini",
			"Lancia",
			"Maserati",
			"Pagani",
			"Spyker",
			"SEAT",
			"Volvo",
			"AC Cars",
			"Aston Martin",
			"Bentley",
			"Blitz",
			"Caterham",
			"Ginetta",
			"Jaguar",
			"Jensen",
			"Land Rover",
			"Lister",
			"Lotus",
			"Marcos",
			"McLaren",
			"MG",
			"Triumph",
			"TVR",
			"Vauxhall",
			"Acura",
			"Buick",
			"Cadillac",
			"Callaway",
			"Chaparral",
			"Chevrolet",
			"Chrysler",
			"DMC",
			"Dodge",
			"Eagle",
			"Ford",
			"Mercury",
			"Panoz",
			"Plymouth",
			"Pontiac",
			"Saleen",
			"Scion",
			"Shelby",
			"Tesla Motors"]
			.map(s => s.toUpperCase());

Game();
module.exports = Game;