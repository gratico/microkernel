import { IFileSystem } from "@gratico/microkernel";
import { Fetch } from "./fetch";
import { LogicalTree } from "npm-logical-tree";
import { IRuntime } from "./runtime";
export interface IPackageManagerProps {
  fs: IFileSystem;
  workingDirectory: string;
  sourceFetch: Fetch;
  dataFetch: Fetch;
}
export interface IPackageManager {
  props: IPackageManagerProps;
  logicalTree: LogicalTree | null;
  runtime?: IRuntime;
  boot: () => Promise<void>;
  syncFileSystem: (runtime: IRuntime) => Promise<void>;
  getModule: <T>(path: string) => Promise<T>;
}
