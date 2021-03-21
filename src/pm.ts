import { IFileSystem } from './fs'
import { Fetch } from './fetch'
import { LogicalTree } from 'npm-logical-tree'
import { IRuntime } from './runtime'
export interface IPackageManagerProps {
  fs: IFileSystem
  workingDirectory: string
  sourceFetch: Fetch
  dataFetch: Fetch
}
export interface IPackageManager {
  props: IPackageManagerProps
  logicalTree: LogicalTree | null
  runtime?: IRuntime
  boot: () => Promise<void>
  syncFileSystem: (runtime: IRuntime) => Promise<void>
  getModule: <T>(path: string) => Promise<T>
}

const lookUpExisitngObject = (list: Record<any, any>[], inputObject: Record<any, any>) => {
  return inputObject
}

export type Transformer = (inputObject: Record<any, any>, existingObject: Record<any, any>) => Record<any, any>

const merge: Transformer = (inputObject, exstingObject) => {
  return inputObject
}
const csvRows: Record<any, any>[] = []
const exisitngRows: Record<any, any>[] = []
const updates = csvRows.map((csvRow) => {
  const existingRow = lookUpExisitngObject(exisitngRows, csvRow)
  return merge(csvRow, existingRow)
})
