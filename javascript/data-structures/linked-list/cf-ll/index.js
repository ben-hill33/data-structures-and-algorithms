'use strict';

const LinkedList = require('./lib/linked-list.js');
let list = new LinkedList();

//Tail is a node that says null
list.insert('seven');
list.insert('Last');
list.insert(true);
list.insert('hallows');
list.insert('deathly');
list.insert(10);
list.insert('a new one');
list.insert('WE DID IT');
list.append('appended to last');

list.includes('seven');//will return true
list.includes('stupid');//will return false

list.insertAfter('hallows', 'elder wand');
list.insertBefore('elder wand', 'invisi-cloak');

list.toString();

console.log('constructed list:', list);
