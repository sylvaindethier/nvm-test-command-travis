# nvm-test travis
> Travis command for `nvm-test`

[npm-url]: https://www.npmjs.org/package/nvm-test-command-travis
[npm-image]: https://nodei.co/npm/nvm-test-command-travis.svg?downloads=true&stars=true
[npm-version-image]: https://img.shields.io/npm/v/nvm-test-command-travis.svg?style=flat-square
[build-url]: https://travis-ci.org/sylvaindethier/nvm-test-command-travis
[build-image]: https://img.shields.io/travis/sylvaindethier/nvm-test-command-travis/master.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/sylvaindethier/nvm-test-command-travis
[codeclimate-image]: https://img.shields.io/codeclimate/github/sylvaindethier/nvm-test-command-travis.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/sylvaindethier/nvm-test-command-travis/coverage
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/sylvaindethier/nvm-test-command-travis.svg?style=flat-square
[deps-url]: https://david-dm.org/sylvaindethier/nvm-test-command-travis#info=dependencies
[deps-image]: https://img.shields.io/david/sylvaindethier/nvm-test-command-travis.svg?style=flat-square
[devDeps-url]: https://david-dm.org/sylvaindethier/nvm-test-command-travis#info=devDependencies
[devDeps-image]: https://img.shields.io/david/dev/sylvaindethier/nvm-test-command-travis.svg?style=flat-square


[![NPM Package Stats][npm-image]][npm-url]

[![NPM Version][npm-version-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Coverage Status][coverage-image]][coverage-url]

[![Dependencies][deps-image]][deps-url]
[![Dev Dependencies][devDeps-image]][devDeps-url]


```sh
$ nvm-test travis
```

## Install
You will need `nvm-test` to be installed.

Global install:
**`npm install nvm-test-command-travis -g`**

Or simply use as per project dev dependencies:
**`npm install --save-dev nvm-test-command-travis`**

## Configure your project
Add the `travis` command in your `.nvmrc.test.json` file:
```json
{
  "commands": ["travis"]
}
```

## Usage:
  * **nvm-test travis [options]**

Test using Node versions from Travis file
