"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
//test sorting an array of numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
//test sorting a string
const charactersCollection = new CharactersCollection_1.CharactersCollection('XmaOpsf');
charactersCollection.sort();
console.log(charactersCollection.data);
//test sorting linkedList
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-20);
linkedList.add(4);
linkedList.sort();
linkedList.print();
