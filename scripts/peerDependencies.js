#!/usr/bin/env node
'use strict'
const deps = require('../package').peerDependencies

const dependencies = []
for (const name in deps) {
  if (!deps.hasOwnProperty(name)) { continue }
  dependencies.push(name + '@' + deps[name])
}
console.log(dependencies.join(' ')) // eslint-disable-line no-console
