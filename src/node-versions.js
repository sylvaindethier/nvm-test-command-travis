import { readFileSync } from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'

const filename = '.travis.yml'
const filepath = join(process.cwd(), filename)
let travis
try {
  travis = yaml.safeLoad(readFileSync(filepath, 'utf8'))
} catch (e) {} // eslint-disable-line no-empty

/**
 * Get the NodeJS versions from the Travis file
 * @throws {Error} - When Travis file can not be loaded
 * @throws {Error} - When Travis "language" is unavailable nor "node_js"
 * @throws {Error} - When Travis "node_js" is unavailable nor undefined
 * @return {String[]} - The NodeJS versions from the Travis file
 */
export default function nodeVersions () {
  if (typeof travis !== 'object') {
    throw new Error(`Can not load Travis file ${filepath}`)
  }

  // check travis.language is 'node_js'
  if (!travis.language) {
    throw new Error(`Expected a Travis "language", none found in ${filepath}`)
  }
  if (travis.language !== 'node_js') {
    throw new Error('Expected Travis "language" to be "node_js" but found ' +
      `"${travis.language}" in ${filepath}`)
  }

  // check travis.node_js is defined and array
  if (travis.node_js == null) {
    throw new TypeError(`Expected Travis "node_js" to be defined in ${filepath}`)
  }
  if (!(travis.node_js instanceof Array)) {
    throw new TypeError(`Expected Travis "node_js" to be an array in ${filepath}`)
  }

  // return node versions
  return travis.node_js
}
