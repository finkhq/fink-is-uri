/* global describe, it */

'use strict'

require('should')

const isValidURI = require('..')

describe('.isValid', function () {
  describe('valid', function () {
    it('when the URI is from different hostname', function () {
      const isValid = isValidURI('http://kikobeats.com', 'myhost.com')
      isValid.should.be.true()
    })

    it('from bittorrent protocol', function () {
      const isValid = isValidURI('magnet:?xt=urn:sha1:PDAQRAOQQRYS76MRZJ33LK4MMVZBDSCL', 'myhost.com')
      isValid.should.be.true()
    })
  })

  describe('invalid', function () {
    it('when the URI is from the same hostname', function () {
      const isValid = isValidURI('google.com', 'https://google.com/')
      isValid.should.be.false()
    })

    it('when is not a valid URI', function () {
      const isValid = isValidURI('aoskdpoakd', 'google.com')
      isValid.should.be.false()
    })
  })
})
