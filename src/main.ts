import * as core from '@actions/core'
import {install} from './install'
import {exec} from 'child_process'
import {promisify} from 'util'
const execShellCommand = promisify(exec)

async function run(): Promise<void> {
  try {
    const version = core.getInput('version', {required: true})
    const pruPath = await install(version)
    const repo = core.getInput('repo', {required: true})
    const paths = core
      .getInput('paths', {required: true})
      .split(/\s+/)
      .map(p => p.trim())
    const token = core.getInput('github-token', {required: true})

    core.info(`Running pru in ${repo} ...`)

    const res = await execShellCommand(
      `${pruPath} ${repo} '${paths.join("' '")}'`,
      {
        env: {
          ...process.env,
          GITHUB_TOKEN: token
        }
      }
    )

    if (res.stdout) {
      core.info(res.stdout)
    }

    core.info('Ran pru')
  } catch (error) {
    if (error instanceof Error) {
      core.error(`Failed to run: ${error}, ${error.stack}`)
      core.setFailed(error.message)
    } else {
      core.error(`Failed to run: ${error}`)
    }
  }
}

run()
