oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ext-tool
$ ext-tool COMMAND
running command...
$ ext-tool (--version)
ext-tool/0.0.2 darwin-x64 node-v14.18.2
$ ext-tool --help [COMMAND]
USAGE
  $ ext-tool COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ext-tool hello PERSON`](#ext-tool-hello-person)
* [`ext-tool hello world`](#ext-tool-hello-world)
* [`ext-tool help [COMMAND]`](#ext-tool-help-command)
* [`ext-tool plugins`](#ext-tool-plugins)
* [`ext-tool plugins:install PLUGIN...`](#ext-tool-pluginsinstall-plugin)
* [`ext-tool plugins:inspect PLUGIN...`](#ext-tool-pluginsinspect-plugin)
* [`ext-tool plugins:install PLUGIN...`](#ext-tool-pluginsinstall-plugin-1)
* [`ext-tool plugins:link PLUGIN`](#ext-tool-pluginslink-plugin)
* [`ext-tool plugins:uninstall PLUGIN...`](#ext-tool-pluginsuninstall-plugin)
* [`ext-tool plugins:uninstall PLUGIN...`](#ext-tool-pluginsuninstall-plugin-1)
* [`ext-tool plugins:uninstall PLUGIN...`](#ext-tool-pluginsuninstall-plugin-2)
* [`ext-tool plugins update`](#ext-tool-plugins-update)

## `ext-tool hello PERSON`

Say hello

```
USAGE
  $ ext-tool hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/thanhtamv2t/ext-tool/blob/v0.0.2/dist/commands/hello/index.ts)_

## `ext-tool hello world`

Say hello world

```
USAGE
  $ ext-tool hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ ext-tool hello world
  hello world! (./src/commands/hello/world.ts)
```

## `ext-tool help [COMMAND]`

Display help for ext-tool.

```
USAGE
  $ ext-tool help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ext-tool.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.20/src/commands/help.ts)_

## `ext-tool plugins`

List installed plugins.

```
USAGE
  $ ext-tool plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ext-tool plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.9/src/commands/plugins/index.ts)_

## `ext-tool plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ext-tool plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ext-tool plugins add

EXAMPLES
  $ ext-tool plugins:install myplugin 

  $ ext-tool plugins:install https://github.com/someuser/someplugin

  $ ext-tool plugins:install someuser/someplugin
```

## `ext-tool plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ext-tool plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ext-tool plugins:inspect myplugin
```

## `ext-tool plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ext-tool plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ext-tool plugins add

EXAMPLES
  $ ext-tool plugins:install myplugin 

  $ ext-tool plugins:install https://github.com/someuser/someplugin

  $ ext-tool plugins:install someuser/someplugin
```

## `ext-tool plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ext-tool plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ext-tool plugins:link myplugin
```

## `ext-tool plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ext-tool plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ext-tool plugins unlink
  $ ext-tool plugins remove
```

## `ext-tool plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ext-tool plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ext-tool plugins unlink
  $ ext-tool plugins remove
```

## `ext-tool plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ext-tool plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ext-tool plugins unlink
  $ ext-tool plugins remove
```

## `ext-tool plugins update`

Update installed plugins.

```
USAGE
  $ ext-tool plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
