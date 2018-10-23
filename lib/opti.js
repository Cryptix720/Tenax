'use strict'
var log = require('npmlog')
var EventEmitter = require('events').EventEmitter
var opti = new EventEmitter()
module.exports = opti

var timings = {}

process.on('time', time)
process.on('timeEnd', timeEnd)

opti.on('time', time)
opti.on('timeEnd', timeEnd)

function time (name) {
  timings[name] = Date.now()
}

function timeEnd (name) {
  if (name in timings) {
    opti.emit('timing', name, Date.now() - timings[name])
    delete timings[name]
  } else {
    log.silly('timing', "Tried to end timer that doesn't exist:", name)
  }
}