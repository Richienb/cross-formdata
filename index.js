"use strict"

const BrowserFormData = require("formdata-polyfill")
const NodeFormData = require("formdata-node")
const envCrosser = require("env-crosser")

module.exports = envCrosser({
    browser: BrowserFormData,
    node: NodeFormData,
    worker: BrowserFormData,
    fallback: undefined,
})
