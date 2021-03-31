const Joi = require("joi");

module.exports = function () {
	Joi.objectId = require("joi-objectid")(Joi);
};
// const JoiObjectId = require("@meanie/joi-object-id");

// module.exports = Joi.extend(JoiObjectId);
