const EventEmitter = require("events");

class MyOwnEventEmitter extends EventEmitter {}

const myEvent = new MyOwnEventEmitter();
const eventName = "console:keypress";

myEvent.on(eventName, function (event) {
  console.log("Event: ", event);
});

/*let index = 0;
setInterval(function () {
  myEvent.emit(eventName, { index: index++, name: "José Neto", age: 30 });
}, 1000);*/

const stdIn = process.stdin;
stdIn.setEncoding("utf-8");
stdIn.setRawMode(true);

console.log("Type something (press Ctrl/Command + C to exit): ");
stdIn.on("data", function (key) {
  if (key === "\u0003") {
    process.exit();
  }

  process.stdout.write(key.toString());
  console.log(key.toString());
});
