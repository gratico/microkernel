import { IFileSystem } from './fs'
import { EventEmitter as EventEmitter2, IEventEmitter } from '@oss-stealth/utils/dist/co/emitter'
import { ICSPChannel } from '@oss-stealth/utils/dist/co/buffers'
import { IBusNode, IRouteServer, IRouteHandler } from './bus'
import { IStore } from './cap'
import { IQBase } from '@gratico/qbase'

// todo remove these unused
import { IProject, IBranch, IProjectClaims, IRepository, IExternalInstallation, IRepositoryMirror } from './business'

export interface IKernelConfig {
  project: IProject
  projectClaims: IProjectClaims
  projectRepositories: IRepository[]
  projectBuildpack: IRepository[]
  projectMirrors: IRepositoryMirror[]
  projectInstallations: IExternalInstallation[]
  token: string
}
export interface IKernelLoci {
  id: string
  parentId?: string
  type: 'worker' | 'master' | 'viewport'
  userGuid: string
}

export interface IKernel {
  config: IKernelConfig
  loci: IKernelLoci
  cache: Map<any, any>
  db: IQBase
  emitters: {
    notifications: IEventEmitter
    logs: IEventEmitter
    directory: IEventEmitter
    viewport: IEventEmitter
    keyboard: IEventEmitter
    [key: string]: IEventEmitter
  }
  bus: IBusNode
  //privateStore: IStore;
  sharedStores: Map<string, IStore>
  env: IEnvironmentVariables
  fs: IFileSystem
  csp: Map<unknown, ICSPChannel>
  server: IRouteServer
  extensions: IKernelExtension[]
}

export interface ILogger {}

export interface IProcessProps {
  logger: ILogger
  kernel: IKernel
  routes: IRouteHandler[]
}
export interface IProcess {
  logger: ILogger
  kernel: IKernel
  start: () => Promise<void>
  stop: () => Promise<void>
  routes: IRouteHandler<any, any>[]
}

export interface IKernelManifestMeta {
  name: string
  description?: string
  icon?: { url: string } | { path: string } | { reactComponent: { exportName: string; moduleLocation: string } }
  homepage?: string
  author?: string
  repository?: string
}
export interface IKernelManifestAdvertisment {
  capabilities: string[]
  config: {
    [key: string]: any
  }
}
export interface IKernelManifest {
  id: string
  meta: IKernelManifestMeta
  advt: IKernelManifestAdvertisment
}
export interface IKernelExtension {
  id: string
  manifest: IKernelManifest
  moduleLocation?: IModuleLocation
  exportName?: string
  export?: any
}
export interface IEnvironmentVariables {
  [key: string]: string
}

export interface IModuleLocation {
  name: string
  exportName?: string
}
