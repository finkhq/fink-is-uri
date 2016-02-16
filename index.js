'use strict'

var _isURI = require('is-uri')
var parseURI = require('parse-uri')

module.exports = function isURI (uri, hostname) {
  uri = parseURI(uri)
  return uri.hostname !== 'localhost' &&
  uri.hostname !== hostname &&
  _isURI(uri, {strictMode: true})
}
