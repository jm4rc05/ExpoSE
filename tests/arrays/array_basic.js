/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

"use strict";

console.log('Fraction Test');
console.log('Loading Symbols');

var x = symbolic X initial ['A'];

assume x.length < 4;

for (var i = 0; i < x.length; i++) {
	if (x[i] == 'What') {
		throw 'Reachable';
	}
}