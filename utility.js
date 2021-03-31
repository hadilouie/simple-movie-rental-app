const EventEmitter = require("events");
const emitter = new EventEmitter();

const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.write("Hello, World!");
		res.end();
	}
});

server.listen(5000);

// emitter.addListener("messageLogged", (arg) => {
// 	console.log("This is Test" + arg.id);
// });

// emitter.emit("messageLogged", { id: 1, name: "louie" });
