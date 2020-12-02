import {
  gratiHubRepository,
  gratiHubJSON,
  gratiHubExternalInstallation,
  gratiHubRepositoryMirror,
  gratiHubOauthToken,
  gratiHubProjectClaim,
  gratiHubWorkspace,
  gratiHubProject,
  gratiHubRepositoryBranch,
} from "./graphql/types";

export type IProject = gratiHubProject;
export type IBranch = gratiHubRepositoryBranch;
export type IProjectClaims = gratiHubProjectClaim;
export type IRepository = gratiHubRepository;
export type IExternalInstallation = gratiHubExternalInstallation;
export type IOauthToken = gratiHubOauthToken;
export type IRepositoryMirror = gratiHubRepositoryMirror;

export interface IMaster {
  id: string;
  createdAt: Date;
  viewports: IViewport[];
}
export interface IProcessRecord {
  id: string;
  processClassId: string;
  createdAt: Date;
  parentType: string;
  parentId: string;
}
export interface IWorker {
  id: string;
  createdAt: string;
  viewportId: string;
  name: string;
}
export interface IViewport {
  id: string;
  workspaces: IWorkspace[];
  streams: IStream[];
  userId: string;
  masterId: string;
  userGuid: string;
  workers: IWorker[];
}
export interface IWorkspace {
  id: string;
  name: string;
  uid: string;
  isRealtime?: boolean;
}
export interface ICheckout {
  id: string;
  repoId: number;
  ref: string;
  fsStateChecksum?: string;
}
export interface IStream {
  id: string;
  name: string;
  viewportId: string;
  audio: boolean;
  video: boolean;
  masterId: string;
  workspaceId: string;
}
export interface IViewportOfferPayload {
  id: string;
  streams: IStream[];
  workspaces: IWorkspace[];
  viewport: IViewport;
  fileBuffers: IFileBuffer[];
}
export interface IViewportOffer {
  id: string;
  viewportId: string;
  workspaceId: string;
  payload: IViewportOfferPayload;
}
export interface IFileBuffer {
  id: string;
  workspaceUID: string;
  applicationId: string;
  args: Record<any, any>[];
  branchName?: string;
  repoName?: string;
  filePath?: string;
}
export interface IHeartBeat {
  id: string;
  peerId: string;
  createdAt: Date;
}
