import { nvmTestVersions, Hooks } from 'nvm-test'
import log from 'npmlog'
import nodeVersions from './node-versions'

export const command = 'travis'
export const desc = 'Test using Node versions from Travis file'
export const handler = (argv) => {
  // get options from argv
  const { install, test, dryRun, logLevel } = argv

  // set log heading & level
  log.heading = 'nvm-test travis'
  log.level = logLevel

  // get Node versions from Travis file
  log.info('config', 'Get Node versions from Travis file')
  let versions
  try {
    versions = nodeVersions()
  } catch (e) {
    log.error('config', e.toString())
    return e.code || 1
  }

  // define hooks
  const pre = (versions, { install, test, dryRun }) => {
    // info the versions
    log.info('nvm-test-versions', 'versions', versions.join(', '))
    // verbose the options
    log.verbose('nvm-test-versions', 'options', { install, test, dryRun })
  }
  const error = (code) => {
    log.error('nvm-test-versions', 'error code %s', code)
  }
  const nvmTestVersionHooks = new Hooks({
    pre: (version) => {
      // info the version
      log.info('nvm-test-version', 'version', version)
    },
    error: (code, version) => {
      log.verbose('nvm-test-version', 'error code %s for version', code, version)
    }
  })
  const hooks = new Hooks({
    pre,
    error,
    nvmTestVersionHooks
  })

  // nvm-test versions
  return nvmTestVersions(versions, { install, test, dryRun }, hooks)
}
