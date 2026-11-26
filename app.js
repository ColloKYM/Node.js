// app.js
const name = process.argv[2] ?? 'friend';
 console.log(`Hello, ${name}!`);

 console.log ('1. Start');
 setTimeout (() => console.log ('3. Done waiting'), 1000);
 console.log('2. Still working');