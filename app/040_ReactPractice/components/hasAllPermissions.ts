export const hasAllPermissions = (userPerms: string[], required: string[]) => {
  return required.every((p) => userPerms.includes(p));
};
