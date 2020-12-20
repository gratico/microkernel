export interface IKeyMapCommand<T = any> {
  sequence: string[];
  payload: T;
  name: string;
  description?: string;
}
export interface IKeyMap {
  defs: { [name: string]: string };
  commands: IKeyMapCommand[];
}
