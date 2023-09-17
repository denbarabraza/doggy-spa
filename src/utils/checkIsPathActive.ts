export const checkIsPathActive = (pathName: string, path: string) => {
  return pathName.replace(/ru(\/)?|en(\/)?/, '') === path;
};
