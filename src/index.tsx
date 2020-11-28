export * from "./bus";
export * from "./fs";
export * from "./pm";
export * from "./runtime";
export * from "./npm";
export * from "./theme";
export * from "./keyboard";

import { IFileSystem } from "./fs";
import {
  EventEmitter as EventEmitter2,
  IEventEmitter,
} from "@oss-stealth/utils/dist/co/emitter";
import { ICSPChannel } from "@oss-stealth/utils/dist/co/buffers";
import { IBusNode, IRouteServer, IRouteHandler } from "./bus";
import { IStore } from "@gratico/cap";
import { IDBStore } from "@gratico/qbase";

// todo remove these unused
import {
  gratiHubRepository,
  gratiHubJSON,
  gratiHubExternalInstallation,
  gratiHubRepositoryMirror,
  gratiHubOauthToken,
  gratiHubProjectClaim,
  gratiHubWorkspace,
  gratiHubProject,
} from "./graphql/types";

export type IProject = gratiHubProject;
export type IProjectClaims = gratiHubProjectClaim;
export type IRepository = gratiHubRepository;
export type IWorkspace = gratiHubWorkspace;
export type IExternalInstallation = gratiHubExternalInstallation;
export type IOauthToken = gratiHubOauthToken;
export type IRepositoryMirror = gratiHubRepositoryMirror;
export interface IKernelProjectConfig {}
export interface IKernelConfig {
  project: gratiHubProject;
  projectClaims: IProjectClaims;
  projectRepositories: IRepository[];
  projectBuildpack: IRepository[];
  projectMirrors: IRepositoryMirror[];
  projectInstallations: IExternalInstallation[];
  userTokens: IOauthToken[];
  token: string;
}
export interface IKernelLoci {
  id: string;
  parentId?: string;
  type: "worker" | "master" | "viewport";
  userGuid: string;
}

export interface IKernel {
  config: IKernelConfig;
  loci: IKernelLoci;
  cache: Map<any, any>;
  db: IDBStore;
  emitters: {
    notifications: IEventEmitter;
    logs: IEventEmitter;
    directory: IEventEmitter;
    [key: string]: IEventEmitter;
  };
  bus: IBusNode;
  //privateStore: IStore;
  sharedStores: Map<string, IStore>;
  env: IEnvironmentVariables;
  fs: IFileSystem;
  csp: Map<unknown, ICSPChannel>;
  server: IRouteServer;
  extensions: IKernelExtension[];
}

export interface ILogger {}

export interface IProcessProps {
  logger: ILogger;
  kernel: IKernel;
  routes: IRouteHandler[];
}
export interface IProcess {
  logger: ILogger;
  kernel: IKernel;
  start: () => Promise<void>;
  stop: () => Promise<void>;
  routes: IRouteHandler<any, any>[];
}

export interface IKernelManifestMeta {
  name: string;
  description?: string;
  icon?: { url: string } | { path: string };
  homepage?: string;
  author?: string;
  repository?: string;
}
export interface IKernelManifestAdvertisment {
  capabilities: string[];
  extensionMatchers?: Array<any[]>;
  config: {
    [key: string]: any;
  };
}
export interface IKernelManifest {
  id: string;
  meta: IKernelManifestMeta;
  advt: IKernelManifestAdvertisment;
}
export interface IKernelExtension {
  manifest: IKernelManifest;
  moduleLocation?: IModuleLocation;
  export?: any;
}
export interface IEnvironmentVariables {
  [key: string]: string;
}

export interface IModuleLocation {
  name: string;
  exportName?: string;
}
