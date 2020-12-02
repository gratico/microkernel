/* tslint:disable */
/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface gratiHubQuery {
  
  /**
   * grati.co graphQL API
   */
  viewer: gratiHubViewer;
  kernel: gratiHubKernel;
}

export interface gratiHubViewer {
  id: string;
  user?: gratiHubLoggedInUser;
  guid?: string;
  userUserMeta: gratiHubJSON;
  getRealtimeToken: string;
  getUserProjects: Array<gratiHubProject>;
  getUser?: gratiHubUser;
  getPublicKeys?: Array<gratiHubPublicKey | null>;
  getProject?: gratiHubProject;
  getProjectCollaborators: Array<gratiHubUser>;
  getRepositories: Array<gratiHubRepository>;
  getRepository?: gratiHubRepository;
  getRepositoryCollaborators: Array<gratiHubUser>;
}

export interface gratiHubLoggedInUser {
  id: number;
  login: string;
  full_name: string;
  avatar_url: string;
}

/**
 * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
 */
export type gratiHubJSON = any;

export interface gratiHubProject {
  id: number;
  username: string;
  full_name?: string;
  description?: string;
  location?: string;
  avatar_url?: string;
  website?: string;
}

export interface gratiHubUser {
  id: number;
  login: string;
  full_name?: string;
  avatar_url?: string;
  is_admin?: boolean;
}

export interface gratiHubPublicKey {
  id: number;
  name?: string;
}

export interface gratiHubRepository {
  id: number;
  name: string;
  full_name?: string;
  ssh_url: string;
  https_clone_url?: string;
  permissions?: gratiHubJSON;
  description?: string;
  private?: boolean;
  updated_at?: string;
  empty?: string;
  avatar_url?: string;
  mirror?: boolean;
  size: number;
  stars_count: number;
  watchers_count: number;
  website?: string;
  branches: Array<gratiHubRepositoryBranch | null>;
}

export interface gratiHubRepositoryBranch {
  name: string;
  commit?: gratiHubRepositoryCommit;
}

export interface gratiHubRepositoryCommit {
  id: string;
  author?: gratiHubRepositoryCommitter;
  committer?: gratiHubRepositoryCommitter;
  message?: string;
  timestamp: string;
  verification?: gratiHubJSON;
}

export interface gratiHubRepositoryCommitter {
  name?: string;
  email?: string;
  username?: string;
}

export interface gratiHubKernel {
  id: string;
  getTheme?: gratiHubJSON;
  userGuid: string;
  getProjectToken: string;
  getProjectClaims: gratiHubProjectClaim;
  getProject: gratiHubProject;
  getProjectConfig: gratiHubJSON;
  getProjectWorkspaces: Array<gratiHubWorkspace>;
  getProjectRepositories: Array<gratiHubRepository>;
  getProjectBuildpack: Array<gratiHubRepository>;
  getWorkspace: gratiHubWorkspace;
  getDocumentState: gratiHubDocumentState;
  getRepositoryMirrors: Array<gratiHubRepositoryMirror>;
  getExternalInstallations: Array<gratiHubExternalInstallation>;
  getOauthTokens: Array<gratiHubOauthToken>;
}

export interface gratiHubProjectClaim {
  userGuid: string;
  userId?: number;
  projectId: number;
  role: string;
  publicKey: string;
  privateKey: string;
  workspaceId?: string;
}

export interface gratiHubWorkspace {
  id: string;
  name?: string;
  projectId: number;
  editorStateId: string;
  isRealtime?: boolean;
}

export interface gratiHubDocumentState {
  state: gratiHubJSON;
}

export interface gratiHubRepositoryMirror {
  id: string;
  provider: string;
}

export interface gratiHubExternalInstallation {
  id: string;
  provider: string;
  name: string;
}

export interface gratiHubOauthToken {
  id: string;
  provider: string;
  token: string;
}

export interface gratiHubMutation {
  logout: gratiHubViewer;
  createAuthenticationSession: boolean;
  verifyAuthenticationSession?: gratiHubViewer;
  registerUser?: gratiHubViewer;
  updateProfile?: gratiHubLoggedInUser;
  createProject?: gratiHubProject;
  createRepository?: gratiHubRepository;
  updateRepository?: gratiHubRepository;
  deleteRepository?: gratiHubRepository;
  createPublicKey?: gratiHubPublicKey;
  deletePublicKey?: gratiHubPublicKey;
  createRepositoryMirror?: gratiHubKernel;
  updateProjectConfig?: gratiHubKernel;
}

export interface gratiHubAuthenticationSession {
  id: string;
}

export enum gratiHubCacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

export interface gratiHubOauthCredentia {
  id: string;
  provider: string;
  token: string;
  timestamp: string;
  meta?: gratiHubJSON;
}

export interface gratiHubProjectTeam {
  id: number;
  name?: string;
  members: Array<gratiHubUser>;
}

/**
 * The `Upload` scalar type represents a file upload.
 */
export type gratiHubUpload = any;

export interface gratiHubWorkspaceState {
  state: gratiHubJSON;
}

export interface gratiHubWorkspaceUser {
  id: string;
  userId: string;
  name: string;
  login?: string;
  anonymous?: string;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface gratiHubResolver {
  Query?: gratiHubQueryTypeResolver;
  Viewer?: gratiHubViewerTypeResolver;
  LoggedInUser?: gratiHubLoggedInUserTypeResolver;
  JSON?: GraphQLScalarType;
  Project?: gratiHubProjectTypeResolver;
  User?: gratiHubUserTypeResolver;
  PublicKey?: gratiHubPublicKeyTypeResolver;
  Repository?: gratiHubRepositoryTypeResolver;
  RepositoryBranch?: gratiHubRepositoryBranchTypeResolver;
  RepositoryCommit?: gratiHubRepositoryCommitTypeResolver;
  RepositoryCommitter?: gratiHubRepositoryCommitterTypeResolver;
  Kernel?: gratiHubKernelTypeResolver;
  ProjectClaim?: gratiHubProjectClaimTypeResolver;
  Workspace?: gratiHubWorkspaceTypeResolver;
  DocumentState?: gratiHubDocumentStateTypeResolver;
  RepositoryMirror?: gratiHubRepositoryMirrorTypeResolver;
  ExternalInstallation?: gratiHubExternalInstallationTypeResolver;
  OauthToken?: gratiHubOauthTokenTypeResolver;
  Mutation?: gratiHubMutationTypeResolver;
  AuthenticationSession?: gratiHubAuthenticationSessionTypeResolver;
  OauthCredentia?: gratiHubOauthCredentiaTypeResolver;
  ProjectTeam?: gratiHubProjectTeamTypeResolver;
  Upload?: GraphQLScalarType;
  WorkspaceState?: gratiHubWorkspaceStateTypeResolver;
  WorkspaceUser?: gratiHubWorkspaceUserTypeResolver;
}
export interface gratiHubQueryTypeResolver<TParent = any> {
  viewer?: QueryToViewerResolver<TParent>;
  kernel?: QueryToKernelResolver<TParent>;
}

export interface QueryToViewerResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToKernelResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubViewerTypeResolver<TParent = any> {
  id?: ViewerToIdResolver<TParent>;
  user?: ViewerToUserResolver<TParent>;
  guid?: ViewerToGuidResolver<TParent>;
  userUserMeta?: ViewerToUserUserMetaResolver<TParent>;
  getRealtimeToken?: ViewerToGetRealtimeTokenResolver<TParent>;
  getUserProjects?: ViewerToGetUserProjectsResolver<TParent>;
  getUser?: ViewerToGetUserResolver<TParent>;
  getPublicKeys?: ViewerToGetPublicKeysResolver<TParent>;
  getProject?: ViewerToGetProjectResolver<TParent>;
  getProjectCollaborators?: ViewerToGetProjectCollaboratorsResolver<TParent>;
  getRepositories?: ViewerToGetRepositoriesResolver<TParent>;
  getRepository?: ViewerToGetRepositoryResolver<TParent>;
  getRepositoryCollaborators?: ViewerToGetRepositoryCollaboratorsResolver<TParent>;
}

export interface ViewerToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToGuidResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToUserUserMetaArgs {
  username?: string;
}
export interface ViewerToUserUserMetaResolver<TParent = any, TResult = any> {
  (parent: TParent, args: ViewerToUserUserMetaArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToGetRealtimeTokenArgs {
  organizationName: string;
}
export interface ViewerToGetRealtimeTokenResolver<TParent = any, TResult = any> {
  (parent: TParent, args: ViewerToGetRealtimeTokenArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToGetUserProjectsArgs {
  username: string;
}
export interface ViewerToGetUserProjectsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: ViewerToGetUserProjectsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToGetUserArgs {
  username?: string;
}
export interface ViewerToGetUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: ViewerToGetUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToGetPublicKeysResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToGetProjectArgs {
  username: string;
}
export interface ViewerToGetProjectResolver<TParent = any, TResult = any> {
  (parent: TParent, args: ViewerToGetProjectArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToGetProjectCollaboratorsArgs {
  username: string;
}
export interface ViewerToGetProjectCollaboratorsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: ViewerToGetProjectCollaboratorsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToGetRepositoriesArgs {
  username?: string;
}
export interface ViewerToGetRepositoriesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: ViewerToGetRepositoriesArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToGetRepositoryArgs {
  username?: string;
  reponame?: string;
}
export interface ViewerToGetRepositoryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: ViewerToGetRepositoryArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ViewerToGetRepositoryCollaboratorsArgs {
  username?: string;
  reponame?: string;
}
export interface ViewerToGetRepositoryCollaboratorsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: ViewerToGetRepositoryCollaboratorsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubLoggedInUserTypeResolver<TParent = any> {
  id?: LoggedInUserToIdResolver<TParent>;
  login?: LoggedInUserToLoginResolver<TParent>;
  full_name?: LoggedInUserToFull_nameResolver<TParent>;
  avatar_url?: LoggedInUserToAvatar_urlResolver<TParent>;
}

export interface LoggedInUserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LoggedInUserToLoginResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LoggedInUserToFull_nameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LoggedInUserToAvatar_urlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubProjectTypeResolver<TParent = any> {
  id?: ProjectToIdResolver<TParent>;
  username?: ProjectToUsernameResolver<TParent>;
  full_name?: ProjectToFull_nameResolver<TParent>;
  description?: ProjectToDescriptionResolver<TParent>;
  location?: ProjectToLocationResolver<TParent>;
  avatar_url?: ProjectToAvatar_urlResolver<TParent>;
  website?: ProjectToWebsiteResolver<TParent>;
}

export interface ProjectToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToUsernameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToFull_nameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToLocationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToAvatar_urlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectToWebsiteResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubUserTypeResolver<TParent = any> {
  id?: UserToIdResolver<TParent>;
  login?: UserToLoginResolver<TParent>;
  full_name?: UserToFull_nameResolver<TParent>;
  avatar_url?: UserToAvatar_urlResolver<TParent>;
  is_admin?: UserToIs_adminResolver<TParent>;
}

export interface UserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToLoginResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToFull_nameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToAvatar_urlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToIs_adminResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubPublicKeyTypeResolver<TParent = any> {
  id?: PublicKeyToIdResolver<TParent>;
  name?: PublicKeyToNameResolver<TParent>;
}

export interface PublicKeyToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PublicKeyToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubRepositoryTypeResolver<TParent = any> {
  id?: RepositoryToIdResolver<TParent>;
  name?: RepositoryToNameResolver<TParent>;
  full_name?: RepositoryToFull_nameResolver<TParent>;
  ssh_url?: RepositoryToSsh_urlResolver<TParent>;
  https_clone_url?: RepositoryToHttps_clone_urlResolver<TParent>;
  permissions?: RepositoryToPermissionsResolver<TParent>;
  description?: RepositoryToDescriptionResolver<TParent>;
  private?: RepositoryToPrivateResolver<TParent>;
  updated_at?: RepositoryToUpdated_atResolver<TParent>;
  empty?: RepositoryToEmptyResolver<TParent>;
  avatar_url?: RepositoryToAvatar_urlResolver<TParent>;
  mirror?: RepositoryToMirrorResolver<TParent>;
  size?: RepositoryToSizeResolver<TParent>;
  stars_count?: RepositoryToStars_countResolver<TParent>;
  watchers_count?: RepositoryToWatchers_countResolver<TParent>;
  website?: RepositoryToWebsiteResolver<TParent>;
  branches?: RepositoryToBranchesResolver<TParent>;
}

export interface RepositoryToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToFull_nameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToSsh_urlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToHttps_clone_urlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToPermissionsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToDescriptionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToPrivateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToUpdated_atResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToEmptyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToAvatar_urlResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToMirrorResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToSizeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToStars_countResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToWatchers_countResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToWebsiteResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryToBranchesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubRepositoryBranchTypeResolver<TParent = any> {
  name?: RepositoryBranchToNameResolver<TParent>;
  commit?: RepositoryBranchToCommitResolver<TParent>;
}

export interface RepositoryBranchToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryBranchToCommitResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubRepositoryCommitTypeResolver<TParent = any> {
  id?: RepositoryCommitToIdResolver<TParent>;
  author?: RepositoryCommitToAuthorResolver<TParent>;
  committer?: RepositoryCommitToCommitterResolver<TParent>;
  message?: RepositoryCommitToMessageResolver<TParent>;
  timestamp?: RepositoryCommitToTimestampResolver<TParent>;
  verification?: RepositoryCommitToVerificationResolver<TParent>;
}

export interface RepositoryCommitToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryCommitToAuthorResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryCommitToCommitterResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryCommitToMessageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryCommitToTimestampResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryCommitToVerificationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubRepositoryCommitterTypeResolver<TParent = any> {
  name?: RepositoryCommitterToNameResolver<TParent>;
  email?: RepositoryCommitterToEmailResolver<TParent>;
  username?: RepositoryCommitterToUsernameResolver<TParent>;
}

export interface RepositoryCommitterToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryCommitterToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryCommitterToUsernameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubKernelTypeResolver<TParent = any> {
  id?: KernelToIdResolver<TParent>;
  getTheme?: KernelToGetThemeResolver<TParent>;
  userGuid?: KernelToUserGuidResolver<TParent>;
  getProjectToken?: KernelToGetProjectTokenResolver<TParent>;
  getProjectClaims?: KernelToGetProjectClaimsResolver<TParent>;
  getProject?: KernelToGetProjectResolver<TParent>;
  getProjectConfig?: KernelToGetProjectConfigResolver<TParent>;
  getProjectWorkspaces?: KernelToGetProjectWorkspacesResolver<TParent>;
  getProjectRepositories?: KernelToGetProjectRepositoriesResolver<TParent>;
  getProjectBuildpack?: KernelToGetProjectBuildpackResolver<TParent>;
  getWorkspace?: KernelToGetWorkspaceResolver<TParent>;
  getDocumentState?: KernelToGetDocumentStateResolver<TParent>;
  getRepositoryMirrors?: KernelToGetRepositoryMirrorsResolver<TParent>;
  getExternalInstallations?: KernelToGetExternalInstallationsResolver<TParent>;
  getOauthTokens?: KernelToGetOauthTokensResolver<TParent>;
}

export interface KernelToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetThemeArgs {
  name: string;
}
export interface KernelToGetThemeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetThemeArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToUserGuidResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetProjectTokenArgs {
  projectName: string;
  workspaceId?: string;
}
export interface KernelToGetProjectTokenResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetProjectTokenArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetProjectClaimsArgs {
  projectToken: string;
}
export interface KernelToGetProjectClaimsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetProjectClaimsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetProjectArgs {
  projectToken: string;
}
export interface KernelToGetProjectResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetProjectArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetProjectConfigArgs {
  projectToken: string;
}
export interface KernelToGetProjectConfigResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetProjectConfigArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetProjectWorkspacesArgs {
  projectToken: string;
}
export interface KernelToGetProjectWorkspacesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetProjectWorkspacesArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetProjectRepositoriesArgs {
  projectToken: string;
  projectName: string;
}
export interface KernelToGetProjectRepositoriesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetProjectRepositoriesArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetProjectBuildpackArgs {
  projectToken: string;
}
export interface KernelToGetProjectBuildpackResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetProjectBuildpackArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetWorkspaceArgs {
  projectToken: string;
  workspaceId: string;
}
export interface KernelToGetWorkspaceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetWorkspaceArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetDocumentStateArgs {
  projectToken: string;
  documentId: string;
}
export interface KernelToGetDocumentStateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetDocumentStateArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetRepositoryMirrorsArgs {
  projectToken: string;
}
export interface KernelToGetRepositoryMirrorsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetRepositoryMirrorsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetExternalInstallationsArgs {
  projectToken: string;
}
export interface KernelToGetExternalInstallationsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetExternalInstallationsArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface KernelToGetOauthTokensArgs {
  projectToken: string;
}
export interface KernelToGetOauthTokensResolver<TParent = any, TResult = any> {
  (parent: TParent, args: KernelToGetOauthTokensArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubProjectClaimTypeResolver<TParent = any> {
  userGuid?: ProjectClaimToUserGuidResolver<TParent>;
  userId?: ProjectClaimToUserIdResolver<TParent>;
  projectId?: ProjectClaimToProjectIdResolver<TParent>;
  role?: ProjectClaimToRoleResolver<TParent>;
  publicKey?: ProjectClaimToPublicKeyResolver<TParent>;
  privateKey?: ProjectClaimToPrivateKeyResolver<TParent>;
  workspaceId?: ProjectClaimToWorkspaceIdResolver<TParent>;
}

export interface ProjectClaimToUserGuidResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectClaimToUserIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectClaimToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectClaimToRoleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectClaimToPublicKeyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectClaimToPrivateKeyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectClaimToWorkspaceIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubWorkspaceTypeResolver<TParent = any> {
  id?: WorkspaceToIdResolver<TParent>;
  name?: WorkspaceToNameResolver<TParent>;
  projectId?: WorkspaceToProjectIdResolver<TParent>;
  editorStateId?: WorkspaceToEditorStateIdResolver<TParent>;
  isRealtime?: WorkspaceToIsRealtimeResolver<TParent>;
}

export interface WorkspaceToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkspaceToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkspaceToProjectIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkspaceToEditorStateIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkspaceToIsRealtimeResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubDocumentStateTypeResolver<TParent = any> {
  state?: DocumentStateToStateResolver<TParent>;
}

export interface DocumentStateToStateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubRepositoryMirrorTypeResolver<TParent = any> {
  id?: RepositoryMirrorToIdResolver<TParent>;
  provider?: RepositoryMirrorToProviderResolver<TParent>;
}

export interface RepositoryMirrorToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RepositoryMirrorToProviderResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubExternalInstallationTypeResolver<TParent = any> {
  id?: ExternalInstallationToIdResolver<TParent>;
  provider?: ExternalInstallationToProviderResolver<TParent>;
  name?: ExternalInstallationToNameResolver<TParent>;
}

export interface ExternalInstallationToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExternalInstallationToProviderResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ExternalInstallationToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubOauthTokenTypeResolver<TParent = any> {
  id?: OauthTokenToIdResolver<TParent>;
  provider?: OauthTokenToProviderResolver<TParent>;
  token?: OauthTokenToTokenResolver<TParent>;
}

export interface OauthTokenToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OauthTokenToProviderResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OauthTokenToTokenResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubMutationTypeResolver<TParent = any> {
  logout?: MutationToLogoutResolver<TParent>;
  createAuthenticationSession?: MutationToCreateAuthenticationSessionResolver<TParent>;
  verifyAuthenticationSession?: MutationToVerifyAuthenticationSessionResolver<TParent>;
  registerUser?: MutationToRegisterUserResolver<TParent>;
  updateProfile?: MutationToUpdateProfileResolver<TParent>;
  createProject?: MutationToCreateProjectResolver<TParent>;
  createRepository?: MutationToCreateRepositoryResolver<TParent>;
  updateRepository?: MutationToUpdateRepositoryResolver<TParent>;
  deleteRepository?: MutationToDeleteRepositoryResolver<TParent>;
  createPublicKey?: MutationToCreatePublicKeyResolver<TParent>;
  deletePublicKey?: MutationToDeletePublicKeyResolver<TParent>;
  createRepositoryMirror?: MutationToCreateRepositoryMirrorResolver<TParent>;
  updateProjectConfig?: MutationToUpdateProjectConfigResolver<TParent>;
}

export interface MutationToLogoutResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateAuthenticationSessionArgs {
  email: string;
}
export interface MutationToCreateAuthenticationSessionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateAuthenticationSessionArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToVerifyAuthenticationSessionArgs {
  email: string;
  code: string;
}
export interface MutationToVerifyAuthenticationSessionResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToVerifyAuthenticationSessionArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToRegisterUserArgs {
  email: string;
  code: string;
  name: string;
  username?: string;
}
export interface MutationToRegisterUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToRegisterUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateProfileArgs {
  name: string;
  username: string;
  website: string;
  description: string;
  channels?: Array<string>;
}
export interface MutationToUpdateProfileResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToUpdateProfileArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateProjectArgs {
  name: string;
  template: string;
}
export interface MutationToCreateProjectResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateProjectArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateRepositoryArgs {
  name: string;
  isPublic: boolean;
  template: string;
}
export interface MutationToCreateRepositoryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateRepositoryArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateRepositoryArgs {
  name: string;
  isPublic: boolean;
}
export interface MutationToUpdateRepositoryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToUpdateRepositoryArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToDeleteRepositoryArgs {
  name: string;
  isPublic: boolean;
}
export interface MutationToDeleteRepositoryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToDeleteRepositoryArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreatePublicKeyArgs {
  name: string;
  value: string;
}
export interface MutationToCreatePublicKeyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreatePublicKeyArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToDeletePublicKeyArgs {
  id: number;
}
export interface MutationToDeletePublicKeyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToDeletePublicKeyArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateRepositoryMirrorArgs {
  projectToken: string;
  repoId: number;
  providerName: string;
  providerUsername: string;
  providerRepoName: string;
}
export interface MutationToCreateRepositoryMirrorResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateRepositoryMirrorArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToUpdateProjectConfigArgs {
  projectToken: string;
  config: string;
}
export interface MutationToUpdateProjectConfigResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToUpdateProjectConfigArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubAuthenticationSessionTypeResolver<TParent = any> {
  id?: AuthenticationSessionToIdResolver<TParent>;
}

export interface AuthenticationSessionToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubOauthCredentiaTypeResolver<TParent = any> {
  id?: OauthCredentiaToIdResolver<TParent>;
  provider?: OauthCredentiaToProviderResolver<TParent>;
  token?: OauthCredentiaToTokenResolver<TParent>;
  timestamp?: OauthCredentiaToTimestampResolver<TParent>;
  meta?: OauthCredentiaToMetaResolver<TParent>;
}

export interface OauthCredentiaToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OauthCredentiaToProviderResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OauthCredentiaToTokenResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OauthCredentiaToTimestampResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface OauthCredentiaToMetaResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubProjectTeamTypeResolver<TParent = any> {
  id?: ProjectTeamToIdResolver<TParent>;
  name?: ProjectTeamToNameResolver<TParent>;
  members?: ProjectTeamToMembersResolver<TParent>;
}

export interface ProjectTeamToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectTeamToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ProjectTeamToMembersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubWorkspaceStateTypeResolver<TParent = any> {
  state?: WorkspaceStateToStateResolver<TParent>;
}

export interface WorkspaceStateToStateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface gratiHubWorkspaceUserTypeResolver<TParent = any> {
  id?: WorkspaceUserToIdResolver<TParent>;
  userId?: WorkspaceUserToUserIdResolver<TParent>;
  name?: WorkspaceUserToNameResolver<TParent>;
  login?: WorkspaceUserToLoginResolver<TParent>;
  anonymous?: WorkspaceUserToAnonymousResolver<TParent>;
}

export interface WorkspaceUserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkspaceUserToUserIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkspaceUserToNameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkspaceUserToLoginResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface WorkspaceUserToAnonymousResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
