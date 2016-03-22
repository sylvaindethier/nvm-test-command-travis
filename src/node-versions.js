import { readFileSync } from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'

const filename = '.travis.yml'

/**
 * Get the NodeJS from the Travis file
 * @return {String[]} - The NodeJS versions from the Travis file
 */
export default function nodeVersions () {
  // travis file from running project
  const filepath = join(process.cwd(), filename)
  const travis = yaml.safeLoad(readFileSync(filepath, 'utf8'))

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
