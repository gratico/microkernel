import { LogicalTree } from "npm-logical-tree";
import { IFileSystem as IFilesystem } from "./fs";

import { Fetch } from "./fetch";
// import { ILogicalTree } from "../../src/utils/npm_tree";
export type ILogicalTree = LogicalTree;
export interface NPMLockFileDependency {
  version: string;
  dependencies?: {
    [key: string]: NPMLockFileDependency;
  };
}
export interface NPMPackageManifest {
  dependencies: {
    [name: string]: string;
  };
  devDependencies: {
    [name: string]: string;
  };
}

export interface ModuleDependency {
  parent?: ModuleDependency;
  specifiedPath: string;
  resolvedFSPath: string;
  modulePath: string;
  type: "source" | "npm" | "core";
  meta?: any;
  pkg: ILogicalTree;
}
export interface LoadedModuleLoad {
  path: string;
  dep: ModuleDependency;
  state: "loaded" | "processed" | "evaled" | "registered";
  rawText: string;
  runtime: IRuntime;
}

export interface ProcessedModuleLoad extends LoadedModuleLoad {
  deps: ModuleDependency[];
}

export interface EvaledModuleLoad extends ProcessedModuleLoad {
  module: any;
}

export type RegisteredModuleLoad = ProcessedModuleLoad;

export type ModuleLoad =
  | LoadedModuleLoad
  | ProcessedModuleLoad
  | EvaledModuleLoad
  | RegisteredModuleLoad;

export interface IRuntimeRegistryItem {
  meta?: any;
  module: any;
}

export interface IRuntimeProps {
  plugins: IRuntimePlugin[];
  fs: IFilesystem;
  workDir: string;
  cacheDir: string;
  sourceFetch: Fetch;
  dataFetch: Fetch;
}

export interface IRuntime {
  props: IRuntimeProps;
  registry: Map<string, IRuntimeRegistryItem>;
  cache: Map<string, any>;
  defaultExtensions: string[];
  logicalTree: ILogicalTree | null;
  importModule: {
    (path: string, lTree?: ILogicalTree | null): Promise<any>;
  };
  getModule: {
    (path: string): Promise<any>;
  };
  boot: {
    (): Promise<any>;
  };
}

export enum IRuntimePluginType {
  DependencyFileFetcher = "DependencyFileFetcher",
  DependencyEvaluator = "DependencyEvaluator",
}

export interface IRuntimePlugin {
  type:
    | IRuntimePluginType.DependencyFileFetcher
    | IRuntimePluginType.DependencyEvaluator;
  matchers: string[];
  actor: {
    (props: IRuntimeProps, load: ModuleLoad): Promise<any>;
  };
}
