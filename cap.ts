//import { Doc as YDoc } from "yjs";
import { IBusNode, IBusPeer } from "./bus";
//import { Awareness } from "y-protocols/dist/awareness.cjs";
import {
  IEventEmitter,
  EventEmitter,
} from "@oss-stealth/utils/dist/co/emitter";

export enum IStoreMessageEnum {
  AWARENESS,
  SYNC,
}

// basic idea
// have a store
// create a listener which would listen on an EventEmitter and process messages

// sync process
// each instance of store would broadcast its messageQueryAwareness
// applyUpdate to itself with resulting messageSync
// reply yes/no
// if no -> reciever would sync

// in case of group of stores
// use clientId
export interface IFilterPeerFunction {
  (el: IBusPeer): boolean;
}
export interface IStore<T = any> {
  id: string;
  doc: T;
  emitter: IEventEmitter;
  filterPeer: IFilterPeerFunction;
  awareness: any;
}
