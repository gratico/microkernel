import { IKernel } from "../kernel";
export function getRepoByName(kernel: IKernel, name: string) {
  return [
    ...kernel.config.projectRepositories,
    ...kernel.config.projectBuildpack,
  ].find((el) => el.name === name);
}
export function getRepoById(kernel: IKernel, id: number) {
  return [
    ...kernel.config.projectRepositories,
    ...kernel.config.projectBuildpack,
  ].find((el) => el.id === id);
}
