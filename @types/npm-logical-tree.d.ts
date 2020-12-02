declare module "npm-logical-tree" {
  export interface LogicalTree {
    dependencies: Map<string, LogicalTree>;
    name: string;
    version: string;
    isRoot: boolean;
    address: string;
  }
  const K: any;
  export default K;
}
