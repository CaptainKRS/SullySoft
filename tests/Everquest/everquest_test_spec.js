var Character = require('./everquest.js')
// look at the keyword new here.
// it creates a new Character and saves it as a local
//(local to this test) instance of character.
// look closely at the variable character and the text to know
// what you need to name your methods and variables

describe('Character creation', function() {
	it('exists, and initializes an empty object', function() {
		var character = new Character()
		expect(character).toExist
	});
	it('can be passed a name', function() {
		var character = new Character("Skippie")
		expect(character.name).toEqual("Skippie")
	});
	it('creates characters that start off naked and weaponless', function() {
		var character = new Character("Skippie")
		expect(character.weapon).toEqual({})
		expect(character.armor).toEqual({})

	});
	it('creates a level 1 toon (no hacking) with 16HP, 20MANA, and  3 dmg', function() {
		var character = new Character("Clairdelune")
		expect(character.name).toEqual("Clairdelune")
		expect(character.level).toEqual(1)
		expect(character.hp).toEqual(16)
		expect(character.mana).toEqual(20)
		expect(character.dmg).toEqual(3)
	});
});

//this is a method on the character instance =)
describe('Attack function', function() {

	it('exists', function() {
		var character = new Character("Akavron")
		expect(typeof(character.attack)).toEqual('function')
	});
	it('reduces your HP by the mobs damage', function() {
	var character = new Character("Akavron")
	var mob = {name: "a large spider", dmg: 3}		
		character.attack(mob)
		expect(character.hp).toEqual(13)
	});
	it('reduces your HP by another mobs damage', function() {
	var character = new Character("Akavron")
	var mob = {name: "an orc pawn", dmg: 4}	
	//notice how the attack function is being called..	
		character.attack(mob)
		expect(character.hp).toEqual(12)
	});
});

describe('Loot Function', function() {
	it('equips a weapon when loot type is weapon', function() {
		var character = new Character("Nandaan")
		var windstriker = {type: "weapon", name: "windstriker", dmg: 40, dly: 50, stats: {str: 5, agi: 5, dex: 5, hp: 50}}
		character.loot(windstriker)
		expect(character.weapon).toEqual(windstriker)
	});
	xit('equips armor when loot type is armor', function() {
		var character = new Character("Nandaan")
		var fungiTunic = {type: "armor", name: "fungi tunic", regen: 15, ac: 10, stats: {str: 5, agi: 5, dex: 5, hp: 50}}
		character.loot(fungiTunic)
		expect(character.armor).toEqual(fungiTunic)
	});
});


























