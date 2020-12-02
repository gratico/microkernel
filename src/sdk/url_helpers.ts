import { IKernel } from "../kernel";
export function getFileURL(
  kernel: IKernel,
  workspaceUID: string,
  repoName: string,
  branchName: string,
  filePath: string,
  applicationId?: string,
  applicationArgs?: any[]
) {
  return `/${workspaceUID}/${repoName}@${branchName}/~/${filePath}`;
}

export default {};
