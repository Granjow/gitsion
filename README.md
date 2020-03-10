# gitsion

Get a version number for the current commit aka. `HEAD`.

The future goal of this module is to generate a version number according to [Semantic Versioning][semver].
Currently, the requirements for getting a semantic version are:

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

[semver]: https://semver.org/
