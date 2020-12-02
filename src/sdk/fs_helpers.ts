import pify from "pify";
import { IFileSystem } from "../fs";
import nodePath from "path";
export async function mkdirP(fs: IFileSystem, path: string) {
  try {
    await pify(fs.mkdir)(path);
  } catch (e) {}
}

export function getCheckoutsPath(repoName: string, branchName?: string) {
  if (branchName) {
    const checkoutId = btoa(repoName + "@" + branchName);
    return nodePath.join("/checkouts", checkoutId);
  } else {
    return "/checkouts";
  }
}

export function getGitDirPath(repoName: string, branchName: string) {
  return nodePath.join(getCheckoutsPath(repoName, branchName), ".git");
}
