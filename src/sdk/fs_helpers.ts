import pify from 'pify'
import { IFileSystem } from '../fs'
import nodePath from 'path'
import { mkdirP as mkdirPF } from '../../../fs/src/helpers/index'

export function fromCheckoutId(input: string, sep = '@') {
  return atob(input).split(sep)
}
export function toCheckoutId(repoName: string, refName: string, sep = '@') {
  return btoa(repoName + sep + refName)
}

export async function mkdirP(fs: IFileSystem, path: string) {
  return mkdirPF(fs, path)
}

export function getCheckoutsPath(repoName: string, branchName?: string) {
  if (branchName) {
    const checkoutId = toCheckoutId(repoName, branchName)
    return nodePath.join('/checkouts', checkoutId)
  } else {
    return '/checkouts'
  }
}

export function getGitDirPath(repoName: string, branchName: string) {
  return nodePath.join(getCheckoutsPath(repoName, branchName), '.git')
}
