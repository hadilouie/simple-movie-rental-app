const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function () {
	mongoose
		.connect("mongodb://localhost/vidly", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		})
		.then(() => winston.info("Connected to MongoDB..."));
};
