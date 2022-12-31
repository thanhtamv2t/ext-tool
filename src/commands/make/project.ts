import {Command, Flags} from '@oclif/core'
import * as path from 'node:path'
import * as fs from 'node:fs'
import * as replace from 'replace-in-file'
// @ts-expect-error no type description were declare
import * as gitclone from 'git-clone/promise.js'

export default class MakeProject extends Command {
  static description = 'Make new wallet project'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'name', required: true, description: 'Project name is required'},
    {name: 'path', required: true, description: 'Path to create is required'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(MakeProject)

    const splitName = args.name.split('/')
    const packageName = splitName[splitName.length - 1] ?? args.name

    this.log('Your project is processing ....')

    if (!fs.existsSync(args.path)) {
      fs.mkdirSync(args.path)
    }

    const createPath = path.resolve(args.path, packageName)

    if (fs.existsSync(createPath) && flags.force) {
      this.log('Your exists folder will be deleted because of force flag')
      fs.rmSync(createPath, {
        force: true,
        recursive: true,
      })
    }

    await gitclone('https://github.com/thanhtamv2t/cake', createPath)

    if (!fs.existsSync(createPath)) {
      return this.log('Check your network and retry!')
    }

    const options = {
      files: path.resolve(createPath, 'package.json'),
    }

    replace.replaceInFileSync({
      ...options,
      from: '<ReplacementName>',
      to: args.name,
    })

    replace.replaceInFileSync({
      ...options,
      from: '<ReplacementPackage>',
      to: packageName,
    })

    this.log('---------------------------------')
    this.log(`${args.name} is ready, let's go!`)
  }
}
