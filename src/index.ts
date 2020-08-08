import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollecion = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollecion);
// sorter.sort();
// console.log(numbersCollecion.data);

const numbersCollection = new CharactersCollection('ZegblkuKjJUUNjEd');
numbersCollection.sort();
console.log(numbersCollection.data);
