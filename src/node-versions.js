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
 * @throws {TypeError} - When
 * @return {String[]} - The NodeJS versions from the Travis file
 */
export default function nodeVersions () {
  if (travis === undefined) {
    throw new Error('Can not load Travis file ' + filepath)
  }

  // check travis.language is 'node_js'
  if (travis.language !== 'node_js') {
    throw new TypeError('Expected travis "language" to be node_js but found ' + travis.language)
  }

  // check travis.node_js defined
  if (travis.node_js === undefined) {
    throw new TypeError('Expected travis "node_js" to be defined')
  }

  // return node versions
  return travis.node_js
}
