import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'
import path from 'path'

const downloadURL = 'https://github.com/winebarrel/pru/releases/download'

export async function install(version: string): Promise<string> {
  core.info(`Installing pru ${version} ...`)
  const assetURL = `${downloadURL}/${version}/pru_${version.substring(
    1
  )}_linux_amd64.tar.gz`
  core.info(`Downloading ${assetURL} ...`)
  const archivePath = await tc.downloadTool(assetURL)
  const extractedDir = await tc.extractTar(archivePath, process.env.HOME, [
    'xz'
  ])
  return path.join(extractedDir, `pru`)
}
