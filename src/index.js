import { nvmTestVersions } from 'nvm-test/runtime'

const filename = '.travis.yml'

const command = 'travis'
const desc = `Test using Node versions from \`${filename}\` file`
const handler = (argv) => {
  // extract Node versions from Travis file
  const versions = ['']

  // get options from argv
  const { install, test, dryRun } = argv

  // nvm-test versions
  return nvmTestVersions(versions, { install, test, dryRun })
}

export { command, desc, handler }
