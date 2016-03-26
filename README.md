# nvm-test travis
> Travis plugin for nvm-test

Test using the Node versions from Travis file

[![NPM Package Stats][npm-image]][npm-url]  
[![NPM Version][npm-version-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Coverage Status][coverage-image]][coverage-url]  
[![JS Style][js-style-image]][js-style-url]
[![Dependencies][deps-image]][deps-url]
[![Dev Dependencies][devDeps-image]][devDeps-url]

```sh
$ nvm-test travis
```

## Install
Prefer install as per project dev dependencies:
**`npm install --save-dev nvm-test-plugin-travis`**

## Configure your project
Add the `travis` plugin to your `.nvmrc.test.json` file:
```json
{
  "plugins": ["travis"]
}
```

## CLI usage

### nvm-test travis [options]
> Test using Node versions from Travis file

[npm-url]: https://www.npmjs.org/package/nvm-test-plugin-travis
[npm-image]: https://nodei.co/npm/nvm-test-plugin-travis.svg?downloads=true&stars=true
[npm-version-image]: https://img.shields.io/npm/v/nvm-test-plugin-travis.svg?style=flat-square
[build-url]: https://travis-ci.org/sylvaindethier/nvm-test-plugin-travis
[build-image]: https://img.shields.io/travis/sylvaindethier/nvm-test-plugin-travis/master.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/sylvaindethier/nvm-test-plugin-travis
[codeclimate-image]: https://img.shields.io/codeclimate/github/sylvaindethier/nvm-test-plugin-travis.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/sylvaindethier/nvm-test-plugin-travis/coverage
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/sylvaindethier/nvm-test-plugin-travis.svg?style=flat-square
[js-style-url]: http://standardjs.com/
[js-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[deps-url]: https://david-dm.org/sylvaindethier/nvm-test-plugin-travis#info=dependencies
[deps-image]: https://img.shields.io/david/sylvaindethier/nvm-test-plugin-travis.svg?style=flat-square
[devDeps-url]: https://david-dm.org/sylvaindethier/nvm-test-plugin-travis#info=devDependencies
[devDeps-image]: https://img.shields.io/david/dev/sylvaindethier/nvm-test-plugin-travis.svg?style=flat-square
