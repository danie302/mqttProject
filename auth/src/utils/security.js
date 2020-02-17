// Dependencies
const crypto = require("crypto");

const isObject = variable =>
    isDefined(variable) &&
    typeof variable === "object" &&
    !Array.isArray(variable);

const isString = variable =>
    isDefined(variable) && typeof variable === "string";

const isDefined = variable =>
    typeof variable !== "undefined" && variable !== null;

module.exports = function encrypt(str) {
    return crypto
        .createHash("sha1")
        .update(`secret${str.toString()}`)
        .digest("hex");
};

module.exports = function getBase64(value) {
    let buffer = false;

    if (isString(value)) {
        buffer = Buffer.from(value, "base64").toString("ascii");
    }

    if (isJson(buffer)) {
        buffer = JSON.parse(Buffer.from(value, "base64").toString("ascii"));
    }

    return buffer;
};

module.exports = function setBase64(value) {
    if (isObject(value)) {
        return Buffer.from(JSON.stringify(value)).toString("base64");
    } else if (isString(value)) {
        return Buffer.from(value).toString("base64");
    }

    return false;
};
