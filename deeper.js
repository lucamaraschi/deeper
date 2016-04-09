'use strict'

const assert = require('assert')

var deeper = module.exports = (obj1, obj2) => {
  assert(typeof obj1 === 'object', 'First input parameter must be an object');
  assert(typeof obj2 === 'object', 'Second input parameter must be an object');

  let extendedObject = {}
  let value = null
  let source = null

  Object.keys(obj2).forEach((prop) => {
    source = obj1[prop];
    value = obj2[prop];
    if (value === obj1) return
    else if(typeof value !== 'object' || value === null) {
      obj1[prop] = value
      return
    } else {
      obj1[prop] = deeper(source, value)
      return
    }
  })

  return obj1;
}
