import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//test sorting an array of numbers
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

//test sorting a string
const charactersCollection = new CharactersCollection('XmaOpsf');
charactersCollection.sort();
console.log(charactersCollection.data);

//test sorting linkedList
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-20);
linkedList.add(4);
linkedList.sort();
linkedList.print();
