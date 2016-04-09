'use strict'

const deeper = require('./deeper')
const assert = require('assert')

let source = {
  prop1: 'val 1',
  prop2: [],
  prop3: {
    subProp1: 'sub value 1'
  }
}

const enricher = {
  prop4: 'val 4',
  prop3: {
    subProp2: 'sub value 2'
  }
}

deeper(source, enricher)

assert(source.prop4, 'the Source object was not extend with the enricher\'s property')
assert(source.prop3.subProp2, 'the Source object was not extend with the enricher\'s property value')
assert(source.prop1, 'the Source object does not contain the original property prop1')
assert(Object.keys(source).length === 4, 'the Source object does not contain all the merged properties')

console.log('====> ALL TESTS ARE OK')
