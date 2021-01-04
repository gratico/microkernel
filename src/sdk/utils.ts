import { IKernel } from '../kernel'
import { IStore } from '../cap'
import {} from '../business'
import { checksum } from '@gratico/checksum'
export function getFileBufferId(
  workspaceIdentifier: string,
  repo: string,
  ref: string,
  filePath: string,
  applicationId: string,
  applicationArgs: any[] = []
) {
  return checksum({
    workspaceIdentifier,
    repo,
    ref,
    filePath,
    applicationId,
    applicationArgs
  })
}

export async function justTryAsync(fn: Promise<any>) {
  try {
    await fn
  } catch (e) {
    //console.error(e)
  }
}

export async function listFileBuffers(kernel: IKernel, workspaceId: string) {}

export async function getSharedStore(kernel: IKernel, bufferId: string): Promise<IStore> {
  const existingStore = kernel.sharedStores.get(bufferId)
  return existingStore as IStore
}
