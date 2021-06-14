# gitsion

Get a version number for the current commit aka. `HEAD` which can be used for
CI/CD pipelines to generate a unique version for every commit.

The future goal of this module is to generate a version number according to
[Semantic Versioning][semver]. Currently, the requirements for getting a
semantic version are:

* Tags are in `v1.0.0` or `1.0.0` format
* Git is installed and current directory is under version control

Examples of generated version numbers:

```bash

o Commit
| → 1.1.0-0001-g4be70ca
|
o Commit with tag v1.0.0
| → 1.0.0
|
o Commit without tag
  → 0.0.0-0000-b83b15e
```

## Example CI/CD usage

When publishing, set the npm version beforehand:

```bash
npm version --no-git-tag-version --allow-same-version $(node_modules/.bin/gitsion)
npm publish
```


## Changelog

### v0.10.5 – 2021-06-14

* Update dependencies

### v0.10.4 – 2020-07-20

* Update dependencies

### v0.10.3 – 2020-04-12

* Update minimist dependency due to vulnerability


[semver]: https://semver.org/
