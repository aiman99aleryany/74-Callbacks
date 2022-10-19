// Write a function called repeatHello, which will take as parameter a callback. The callback function will simply print "Hello". The repeatHello function will have to execute the callback function with an interval of 1 second.

// The callback function must be an arrow function, can you also explain why?
// The only good reason I found is that the arrow function doesn't have its binding to the "this" keyword,
// so it is easy to access the lexical scope of the parent function, which is ideally good because
// when you pass functions you don't want them to take something/data with them.
// you just want to send it in a clear classic fashion way.

const printHello = () => console.log("Hello");

const repeatHello = (callback) => setInterval(() => callback(), 1000);

repeatHello(printHello);
